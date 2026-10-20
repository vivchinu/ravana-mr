# RAVANA — THE FINAL ARROW

Mixed-reality boss battle for **Meta Quest 3**, built with **Three.js + WebXR** (Vite).
Place a 2.5 m Ravana on your real floor, then shoot all ten heads with the bow.

**▶ Play:** https://vivchinu.github.io/ravana-mr/ — open it in the **Meta Quest Browser** and press *Enter Mixed Reality*. GitHub Pages serves HTTPS, so no certificate or adb setup is needed.

> **Status:** tested end-to-end in a desktop browser (desktop preview mode: placement, aiming,
> all 10 targets, no double scoring, fireballs, victory, restart). **Not yet tested on a Quest 3
> headset**: passthrough, hit-test floor detection, anchors and controller-mounted bow offsets still
> need to be verified there. The game reports what the browser actually grants (see *Diagnostics*).

---

## 1. Asset inspection results

### `Ravan .blend` → `public/models/ravana.glb`
| Finding | Detail |
|---|---|
| Meshes | **Two overlapping copies** of the character: `geometry_0` (**9 heads**, 550,674 tris) and `geometry_0.001` (**10 heads**, 576,383 tris). They have the same bounding box, so exporting both would double the cost and cause z-fighting. Only `geometry_0.001` is exported. |
| Geometry | Unwelded triangle soup (1.73 M verts for 576 k tris), single material `PrincipledMaterial`, 1024² `albedo` + `metallic_roughness` textures (packed). Modifier: *Smooth by Angle* (geometry nodes, applied on export). |
| Animations / rig | None (static pose, no armature). |
| Hitboxes | 10 **cube Empties** `Empty.001`–`Empty.010` in collection **"box collider hit"**, sitting on the 10 heads (verified against renders). The collection "Ravana Head Hitboxes" exists but is empty. |
| Orientation / size | Z-up in Blender, faces −Y (glTF: faces +Z). Bounding box 2.22 × 1.36 (tall) × 1.46 model units. The origin is mid-body, not at the feet. The game recomputes the bbox at runtime and moves the soles to y = 0. |

`tools/export_ravana.py` (run with Blender, **does not modify or save your .blend**):
1. Drops `geometry_0`.
2. Renames the Empties to `Ravana_Head_Hitbox_01…10`, ordered from the player's **left to right** when facing Ravana. The original name is kept as the `source_name` glTF extra (e.g. `_01` = `Empty.009`, `_06` = `Empty.010`).
3. Writes `ravana_full.glb` (576 k tris, 63 MB) and `ravana.glb` (welded + collapse-decimated to **150 k tris, 8 MB**, the default).

```bash
blender -b --disable-autoexec "Ravan .blend" --python tools/export_ravana.py -- public/models 150000
```

**Optimization trade-off:** 576 k triangles plus a 63 MB download is heavy for the Quest browser. The decimated model looked visually indistinguishable at play distance in testing, but fine detail (jewellery, beard strands) is softer up close. Use `?model=full` to compare. Change the last argument (e.g. `250000`) for a different budget.

### `bow_and_arrow_stylized.glb` → `public/models/bow.glb`
Sketchfab export (“Bow and arrow Stylized” by **Mamba_Negra, CC-BY 4.0**, so attribution is required and shown on the start page). 10 meshes, 13.8 k tris, one PBR material, no animations. It contains a separate **`Arrow_low`** mesh, which is reused as the projectile. Native orientation: limbs along +Y, arrow along X, 1.16 m tall. `bow.js` auto-orients it (shoot axis → −Z, limbs → +Y), scales it to `CONFIG.bow.height`, and puts the grip at the origin.

---

## 2. Requirements
- Node.js 18+ (tested with 22) and npm
- Meta Quest 3 with the **Meta Quest Browser** (the only Quest browser with `immersive-ar` passthrough)
- For USB testing: Android platform-tools (`adb`) and Developer Mode on the headset
- Optional: Blender 4.2+ (to re-export Ravana)

## 3. Install & run
```bash
cd ravana-mr
npm install
npm run dev            # http://localhost:5173
```
Open it on the desktop and choose **Desktop preview (mouse)** to test without a headset.

### Getting it onto the Quest 3 (WebXR needs a secure context)
**Option A: USB + adb reverse (recommended, no certificates)**
```bash
adb reverse tcp:5173 tcp:5173
```
Then open `http://localhost:5173` in the Quest Browser. `localhost` counts as secure.

**Option B: Wi-Fi with HTTPS**
```bash
npm run dev:https      # self-signed cert, https://<PC-LAN-IP>:5173
```
Open the Network URL printed by Vite in the Quest Browser and accept the certificate warning. Make sure Windows Firewall allows Node on private networks.

**Production build:** run `npm run build` and serve `dist/` over HTTPS from any static host.

### Hosting on GitHub Pages
The live site is the `gh-pages` branch: the Vite build with base path `/ravana-mr/`. After changing the code, push `main` as usual, then redeploy with:
```bash
bash tools/deploy-pages.sh
```
`ravana_full.glb` (63 MB) is not committed or hosted, so `?model=full` only works locally after running the export script.

### Entering the experience
1. The start page lists **diagnostics**: secure context, WebXR, `immersive-ar`, `immersive-vr`, browser, triangle counts, and whether the 10 hitbox nodes were found.
2. Press **Enter Mixed Reality**. The session requests `immersive-ar` + `local-floor`, with optional `hit-test`, `anchors`, `plane-detection`, `hand-tracking` and `bounded-floor`.
3. After the session starts, the game reads `session.environmentBlendMode`. Passthrough is reported only for `alpha-blend`/`additive`. If the runtime returns `opaque`, the panel shows a red **“NOT mixed reality”** warning.
4. If `immersive-ar` is unsupported, the page explains why. If `immersive-vr` is available, it offers a clearly labelled **VR test mode (no passthrough — not MR)**. The game never silently falls back to VR.

## 4. How to play
| Phase | Controls |
|---|---|
| Placement | Ravana is a **6 m Dussehra effigy** by default, sized from 1.5 to 20 m. Place him far away (up to 60 m) on the floor so he towers over the room. Point at the floor and the gold ring follows it; it grows with distance so it stays visible. Pull the **trigger** to place. **Thumbstick ↕** height, **↔** turn. Panel: Height −/+, Reset size. |
| Ready | **Start Battle**, **Reposition Ravana**, Fireballs ON/OFF, Hitboxes ON/OFF. |
| Pick up the bow | The bow floats in front of you at waist height. Reach to its handle and **hold the GRIP button** to hold it. Let go of GRIP and the bow stays floating where you left it. |
| Nock & draw | Bring your **other hand** to the string and hold **GRIP** (the trigger also works). An arrow appears on the string. **Pull back**: the string follows your hand, the limbs bend, and a gold aim line appears. The aim runs from your string hand through the bow grip, like a real bow. |
| Shoot | **Let go of the button** to release the string. Arrow speed scales with how far you drew (10–38 m/s, full draw = 50 cm). Draws under 8 cm don't fire. The aimed head's marker turns white. You can take practice shots before **Start Battle**, but they don't score. |
| **Hand tracking** (put the controllers down) | Close your **FIST** around the floating bow's handle to hold it. The bow attaches to your fist, with the handle running through your curled fingers, and turns with your forearm. Open your hand to drop it. With the other hand, make a **fist or pinch** at the string, pull back, and **open your hand** to shoot. Pinching the panel buttons still works. A hand holding the bow or string never clicks the UI by accident. |
| Final target: the navel | After all ten heads are destroyed, a glowing ring appears at Ravana's **navel**, the source of his immortality (amrita) in the Ramayana. The counter shows **NAVEL!**. Only an arrow in the navel (+500) triggers the Brahmastra finale. Before that, the navel can't be hit. |
| Fireballs | A glowing orb charges at Ravana's chest (warning sound + panel warning), then flies slowly along a straight line. Shoot it (+50) or lean aside. Getting hit costs 25 points and flashes red. |
| Victory (Dussehra finale) | The Brahmastra charges (golden aura), then **the effigy burns**: flames, smoke and crackers pop all over his body. Next comes a **huge explosion** with a white-hot flash, light burst, ground shockwave rings, a fireball and flying burning debris. Then **fireworks** and a giant glowing **HAPPY DUSSEHRA** in the sky above where he stood. The victory panel says *Happy Dussehra — Dharma prevails* and fireworks keep going until you restart. The score, accuracy and **Restart** are on the panel. |

Desktop preview: left-click places Ravana and presses buttons. **Hold the left button to draw** (full draw in 0.9 s) and release to shoot. Right-drag looks around, the wheel moves, **H** toggles hitboxes, **R** restarts, **Esc** returns to the menu.

## 5. Configuration (`src/config.js`, or URL parameters)
| Setting | Where |
|---|---|
| Ravana height | `ravana.defaultHeight` / `?height=3` |
| Hitbox naming strategy | `hitboxes.namePatterns` (regexes tried in order; must match exactly 10 nodes) |
| Hitbox size | `hitboxes.sizeMultiplier` (1.15 = 15 % more forgiving than the Empties) |
| Hits per head | `hitboxes.hitsPerTarget` / `?hits=3` (default 1) |
| Fallback head positions | `hitboxes.fallback`, used **only** if the GLB has no hitbox nodes (a warning is then shown on the panel and in the console). The 10 entries are model-space values measured from the .blend Empties: glTF coordinates, Y up, character faces +Z, `center` + box `half` extents. |
| Bow offsets | `bow.position` (grip offset in controller space), `bow.rotationDeg`, `bow.height`, `bow.flipArrow` |
| Navel target | `navel.modelPosition` (model-space x/y; depth is found by raycasting onto the belly), `navel.radius`, `navel.score` |
| Hand tracking | `hands.bowOffset` (fist frame), `hands.fistCurlClose` / `hands.fistCurlOpen` (fist detection thresholds) |
| Archery feel | `bow.grabRadius` / `bow.stringGrabRadius` (how close your hand must be), `bow.maxDraw`, `bow.minDraw`, `bow.flexBack` / `bow.flexIn` (limb bend), `bow.stringCut`, `bow.restDistance` |
| Arrows | `arrows.speed` (full draw), `arrows.minSpeed`, `arrows.gravity`, `arrows.maxActive` |
| Fireballs | `attacks.enabled` / `?attacks=0`, `cooldown`, `warningTime`, `speed`, `minPlayerDistance` |
| Debug | `?debug=1` (hitbox wireframes on), `?model=full` |

## 6. Debugging & testing
- **Console on Quest:** connect over USB, open `chrome://inspect/#devices` on the PC and inspect the Quest Browser tab. Look for logs prefixed `[inspect]`, `[ravana]`, `[bow]`, `[xr]` and `[game]`: the full GLB hierarchy, triangle counts, the hitbox table, the bbox and feet offset, granted XR features, `environmentBlendMode`, and anchor and hit-test status.
- **Hitbox visualisation:** use the panel's **Hitboxes: ON** button, `?debug=1`, or **H** on desktop. Green boxes are live, red are destroyed, and white means currently aimed at.
- **Test all ten heads:** shoot each head, or in the console during a battle run (fires a full-draw arrow)
  `for (let i = 1; i <= 10; i++) setTimeout(() => RAVANA.shootAt(i), i * 500)`.
  `RAVANA.shootAt(n)` aims the real bow and fires a real arrow through the normal collision path. Then run `RAVANA.shootNavel()` for the final navel shot. The navel's wireframe sphere is magenta when **Hitboxes: ON**.
- **Debug stepping:** `RAVANA.step(dt)` advances the game by `dt` seconds even when the tab isn't animating, which is handy for testing the finale from the console.
- **Verify the victory sequence:** after the tenth head the navel target appears. After the navel hit, the state goes `battle → finale → victory` (~4.4 s), fireballs stop, and arrows no longer collide. `RAVANA.effects.particles.n` and `RAVANA.arrows.active.length` return to 0.
- **Double-hit guard:** a destroyed head's collision volume is disabled. Re-shooting it passes through to the body (non-scoring, the arrow sticks).

## 7. Architecture
| File | Responsibility |
|---|---|
| `src/main.js` | Renderer, game state machine (`placing → ready → battle → finale → victory`), input routing, collisions → scoring, finale timeline |
| `src/xr.js` | Capability detection, session start, controller pointers, hand joints, fist detection (finger-curl ratio with hysteresis), fist pose, per-controller hit-test sources, floor fallback, anchors |
| `src/ravana.js` | GLB load + inspection logging, feet alignment, hitbox discovery (Empties or meshes) and fallback, swept AABB tests in Ravana-local space, BVH body raycast (`three-mesh-bvh`), finale glow and sink |
| `src/bow.js` | Bow load and auto-orientation. Bakes the meshes into one bow space with a double-sided material and a limb-flex vertex shader. Cuts the straight part of the original string out and replaces it with an animated two-segment string. Beads on the string ride along with it. Extracts the arrow template. |
| `src/archery.js` | Two-hand interaction: grab the bow (grip), nock and draw the string with the other hand, aim from the string hand through the grip, release to fire with draw-scaled power, haptics, the floating rest pose, and desktop hold-to-draw |
| `src/arrows.js` | Pooled projectiles (14). Swept segment tests each frame, stick-in-body, timeouts |
| `src/effects.js` | Single-draw-call particle system (900 cap), pooled flashes, rings and score text, Brahmastra aura, damage flash, procedural WebAudio SFX |
| `src/attacks.js` | Optional fireballs: warning → straight flight, shoot-down, player hit |
| `src/ui.js` | Canvas-texture world panel (redrawn only on change), overhead counter, HTML start page |
| `src/config.js` | All tunables |

**Performance choices:** one GLB load each, a 150 k-tri Ravana, a BVH so body raycasts are cheap, no shadows, one directional light + hemisphere light + a prefiltered environment map, no post-processing, fixed foveation, a 72 Hz target, pooled objects with no per-shot allocations of meshes or materials, and additive particles drawn in one call.

## 8. Known limitations / honest notes
- **Passthrough, hit-test, anchors** depend on the Quest Browser version and permissions. The game uses what `session.enabledFeatures` reports. Without hit-test, placement uses the runtime's `local-floor` plane (y = 0, your Guardian floor), and the panel says which source is in use. Without anchors, Ravana stays fixed in `local-floor` space. If you recenter the headset, use **Reposition**.
- **Hand tracking** uses `hand-tracking`, which is optional and may not be granted. Fist detection and the fist-attached bow were verified with simulated hand joints in the desktop browser, not on a Quest. Real tracking can lose fingers when the hand is occluded; the bow then keeps its last fist pose. If grabs trigger too easily or not at all, tune `hands.fistCurlClose`/`fistCurlOpen` (watch `curl` on the pointers via the console).
- The ten heads are one combined mesh. Hits show effects and markers, but **head geometry is not removed**. At the finale the whole model burns, then disappears inside the explosion flash; the debris is procedural shards, not pieces of the model.
- The bow is mounted on the controller's target-ray pose, and hand positions for grabbing use the grip (palm) pose. The two-hand logic was verified with simulated controllers in the desktop browser, not on a Quest. If the bow sits oddly in your hand, adjust `CONFIG.bow.position` / `rotationDeg`. If grabbing feels too strict or too loose, adjust `grabRadius` / `stringGrabRadius`.
- Real occlusion by furniture (depth sensing) is not implemented. Virtual objects always draw over the room.

### If the browser does not expose passthrough: native fallback (Unity + Meta XR SDK)
1. Unity 2022.3+/6 with the **Meta XR All-in-One SDK**, plus OpenXR + Meta Quest feature group.
2. Add an `OVRCameraRig`, enable **Passthrough** (`OVRManager` → Insight Passthrough) and an `OVRPassthroughLayer` (underlay), and set the camera clear color to (0,0,0,0).
3. Use **MRUK** (Scene API) or `OVRSpatialAnchor` for floor detection and anchoring instead of WebXR hit-test and anchors.
4. Import `ravana.glb` (glTFast). The `Ravana_Head_Hitbox_XX` nodes become empty Transforms, so add a `BoxCollider` (size = 2 × node scale) to each, set them as triggers, and port `segmentTest` to `Physics.Raycast`/`SphereCast`.
5. Port the game logic from `main.js` (state machine, scoring, finale) into MonoBehaviours, with effects as pooled ParticleSystems.
