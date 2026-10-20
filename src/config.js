// Central tuning file. Most values can also be overridden from the URL, e.g.
//   ?debug=1            show hitbox wireframes + extra logging
//   ?model=full         load ravana_full.glb (576k tris) instead of ravana.glb (150k tris)
//   ?height=3           Ravana height in metres
//   ?attacks=0          disable fireballs
//   ?hits=3             hits needed per head
const params = new URLSearchParams(location.search);
const num = (k, d) => (params.has(k) ? Number(params.get(k)) : d);
const bool = (k, d) => (params.has(k) ? !['0', 'false', 'off'].includes(params.get(k)) : d);

export const CONFIG = {
  debug: bool('debug', false),

  models: {
    // BASE_URL is '/' locally and '/ravana-mr/' on GitHub Pages.
    ravana: `${import.meta.env.BASE_URL}models/${params.get('model') === 'full' ? 'ravana_full.glb' : 'ravana.glb'}`,
    bow: `${import.meta.env.BASE_URL}models/bow.glb`,
  },

  ravana: {
    defaultHeight: num('height', 6), // metres, top of the crowns to the soles (Dussehra effigy size)
    minHeight: 1.5,
    maxHeight: 20,
    heightStep: 1,
    maxPlaceDistance: 60, // metres — place him far away on the floor so he looks huge
    // Body hits (non-scoring) use a BVH raycast against the character mesh.
    bodyCollision: true,
  },

  hitboxes: {
    // Tried in order; the first pattern that matches exactly `expectedCount` nodes wins.
    // GLTFLoader keeps node names but replaces spaces/.[]:/ with "_" or removes them.
    namePatterns: [/^Ravana_Head_Hitbox_(\d+)$/i, /Head.*Hitbox/i, /Hitbox/i, /Collider/i],
    expectedCount: 10,
    // Collision volume = node's world-scale half extents (Blender cube Empty, size 1) * this.
    sizeMultiplier: 1.15,
    // If a node has no usable scale (e.g. a plain-axes Empty) use this half-size, in model units.
    defaultHalfExtent: 0.09,
    hitsPerTarget: num('hits', 1),
    // ONLY used when the GLB contains no hitbox nodes. Model-space coordinates (glTF, Y up,
    // character faces +Z), ordered player-left -> player-right. These values were measured
    // from the Empties in "Ravan .blend" (collection "box collider hit"); edit them if you
    // swap in a different model. center = [x, y, z], half = box half extents.
    fallback: [
      { center: [-1.0335, 0.4437, -0.4821], half: [0.0918, 0.1674, 0.0918] },
      { center: [-0.8408, 0.4437, -0.3738], half: [0.0918, 0.1674, 0.0918] },
      { center: [-0.6429, 0.4437, -0.3152], half: [0.0918, 0.1674, 0.0918] },
      { center: [-0.4023, 0.4437, -0.1439], half: [0.0918, 0.1674, 0.0918] },
      { center: [-0.1901, 0.4496, 0.0104], half: [0.0712, 0.1298, 0.0712] },
      { center: [0.0257, 0.4356, 0.0968], half: [0.0729, 0.1534, 0.1036] },
      { center: [0.1802, 0.4279, -0.0592], half: [0.0702, 0.1216, 0.0821] },
      { center: [0.4019, 0.3967, -0.2226], half: [0.0821, 0.1216, 0.0821] },
      { center: [0.5881, 0.3801, -0.3789], half: [0.0821, 0.1216, 0.0821] },
      { center: [0.8017, 0.4033, -0.5191], half: [0.0821, 0.1216, 0.0821] },
    ],
    showMarkers: true, // small floating diamonds above each live head
  },

  // Final target after all ten heads: Ravana's navel (source of his immortality).
  navel: {
    // Model-space (glTF, Y up, faces +Z) x/y of the navel; z is found by raycasting onto the body
    // from the front. Measured from the character in "Ravan .blend" — tune here if it is off.
    modelPosition: [-0.015, -0.045],
    radius: 0.06, // model units (≈ 11 cm at 2.5 m height)
    score: 500,
  },

  bow: {
    defaultHand: 'left', // hand that should pick up the bow first (any hand can grab it)
    // Grip pose offset in the holding controller's target-ray space (-Z = pointing direction).
    position: [0, -0.02, -0.04], // metres
    rotationDeg: [0, 0, 0], // extra visual rotation of the bow model
    height: 1.0, // metres, limb tip to limb tip
    flipArrow: false, // mirror auto-orientation if the arrow tip ends up pointing backwards
    grabRadius: 0.3, // hand must be this close to the bow grip to pick it up (grip button)
    stringGrabRadius: 0.25, // other hand must be this close to the string to grab it
    maxDraw: 0.5, // metres of draw at full power
    minDraw: 0.08, // releasing with less draw than this cancels the shot
    stringCut: 0.68, // fraction of half-height where the animated string meets the original mesh
    flexBack: 0.22, // limb tip bend backwards at full draw (fraction of half-height)
    flexIn: 0.06, // limb tip bend inwards at full draw
    stringColor: 0xe9dcc0,
    restDistance: 0.45, // when not held, the bow floats this far in front of you
    fireCooldown: 0.25, // seconds
  },

  // Hand tracking (no controllers): make a FIST on the bow handle to hold it; FIST or PINCH
  // the string with the other hand to draw; open the hand to release.
  hands: {
    bowOffset: [0, 0, 0], // metres, in the fist frame (+Y = towards the index knuckle, -Z = forearm direction)
    fistCurlClose: 1.2, // finger curl ratio below which a hand counts as a fist
    fistCurlOpen: 1.4, // ...and above which it counts as open again
  },

  arrows: {
    speed: 38, // m/s at full draw
    minSpeed: 10, // m/s at minimum draw
    gravity: 1.5, // m/s^2 (small drop; the aim line only shows while drawing)
    maxActive: 14,
    lifetime: 4, // s in flight before despawn
    stuckLifetime: 4, // s an arrow stays stuck in Ravana's body
    length: 0.75, // metres
  },

  scoring: { headDestroyed: 100, headHit: 25, fireballShot: 50, playerHit: -25 },

  attacks: {
    enabled: bool('attacks', true),
    cooldown: num('cooldown', 7), // seconds between fireballs
    firstDelay: 5,
    warningTime: 1.4, // charge-up glow before launch
    speed: 3.2, // m/s — slow enough to shoot down or lean away from
    radius: 0.14, // metres
    playerRadius: 0.2,
    maxLateralOffset: 0.25, // aim this far beside the head at random
    minPlayerDistance: 1.6, // never launch if the player is closer than this to Ravana
    lifetime: 14,
  },

  ui: {
    panelWidth: 0.78, // metres
    distance: 1.25,
  },
};
