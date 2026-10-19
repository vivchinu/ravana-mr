"""
Export "Ravan .blend" -> public/models/ravana.glb (+ ravana_full.glb)

Run (does NOT modify or save the .blend):
  blender -b --disable-autoexec "Ravan .blend" --python tools/export_ravana.py -- <out_dir> [decimate_target_tris]

What it does (in memory only):
  1. Removes `geometry_0` (an older 9-head duplicate that sits exactly on top of
     `geometry_0.001`, the 10-head version). Exporting both would double the cost
     and cause z-fighting.
  2. Renames the 10 cube Empties of collection "box collider hit"
     (Empty.001 ... Empty.010) to Ravana_Head_Hitbox_01 ... _10, ordered from
     the player's LEFT to RIGHT when facing Ravana (Blender -X -> +X). The original
     name is kept as the custom property `source_name` (glTF extras).
  3. Exports ravana_full.glb (original triangle count) and ravana.glb
     (merge-by-distance + collapse-decimate to roughly the target triangle count).
"""
import bpy, sys, os

argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
out_dir = argv[0] if argv else os.getcwd()
target_tris = int(argv[1]) if len(argv) > 1 else 150000

KEEP_MESH = "geometry_0.001"
DROP_MESH = "geometry_0"
HITBOX_COLLECTION = "box collider hit"

if DROP_MESH in bpy.data.objects:
    bpy.data.objects.remove(bpy.data.objects[DROP_MESH], do_unlink=True)

empties = [o for o in bpy.data.collections[HITBOX_COLLECTION].objects if o.type == "EMPTY"]
empties.sort(key=lambda o: o.matrix_world.translation.x)
for i, o in enumerate(empties, 1):
    o["source_name"] = o.name
    o.name = "Ravana_Head_Hitbox_%02d" % i
print("HITBOXES", [(o.name, o["source_name"], tuple(round(v, 4) for v in o.matrix_world.translation),
                    tuple(round(v, 4) for v in o.matrix_world.to_scale())) for o in empties])

# Only export the character and the hitbox empties.
mesh = bpy.data.objects[KEEP_MESH]
export_objs = [mesh, mesh.parent] + empties if mesh.parent else [mesh] + empties

def export(path):
    bpy.ops.object.select_all(action="DESELECT")
    for o in export_objs:
        o.hide_set(False); o.select_set(True)
    bpy.context.view_layer.objects.active = mesh
    bpy.ops.export_scene.gltf(filepath=path, export_format="GLB", use_selection=True,
                              export_apply=True, export_extras=True, export_yup=True,
                              export_animations=False, export_cameras=False, export_lights=False,
                              export_image_format="AUTO")

def tri_count(o):
    dg = bpy.context.evaluated_depsgraph_get()
    m = o.evaluated_get(dg).to_mesh(); m.calc_loop_triangles(); n = len(m.loop_triangles)
    o.evaluated_get(dg).to_mesh_clear(); return n

full_tris = tri_count(mesh)
export(os.path.join(out_dir, "ravana_full.glb"))
print("FULL_TRIS", full_tris)

# Optimised version: weld the triangle soup, then collapse-decimate.
bpy.ops.object.select_all(action="DESELECT")
mesh.select_set(True); bpy.context.view_layer.objects.active = mesh
bpy.ops.object.mode_set(mode="EDIT")
bpy.ops.mesh.select_all(action="SELECT")
bpy.ops.mesh.remove_doubles(threshold=0.00001)
bpy.ops.object.mode_set(mode="OBJECT")
welded = tri_count(mesh)
ratio = min(1.0, target_tris / max(1, welded))
dec = mesh.modifiers.new("Decimate", "DECIMATE")
dec.decimate_type = "COLLAPSE"; dec.ratio = ratio; dec.use_collapse_triangulate = True
# keep Smooth-by-Angle (geometry nodes) last so shading stays correct
mesh.modifiers.move(len(mesh.modifiers) - 1, 0)
print("OPT_TRIS", tri_count(mesh), "ratio", round(ratio, 4))
export(os.path.join(out_dir, "ravana.glb"))
