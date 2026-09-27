import * as THREE from "three";

/** Sculpted archer interpretation of the SSI Karna Award reference. */
export function addKarnaSculpture(parent: THREE.Group, gold: THREE.Material) {
  const figure = new THREE.Group();
  parent.add(figure);
  const v = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
  function ellipsoid(x: number, y: number, z: number, sx: number, sy: number, sz: number) {
    const object = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 16), gold);
    object.position.set(x, y, z); object.scale.set(sx, sy, sz); figure.add(object);
    return object;
  }
  function stroke(points: THREE.Vector3[], radius: number, segments = 32) {
    const curve = new THREE.CatmullRomCurve3(points);
    const object = new THREE.Mesh(new THREE.TubeGeometry(curve, segments, radius, 8, false), gold);
    figure.add(object); return object;
  }
  function limb(a: THREE.Vector3, b: THREE.Vector3, r1: number, r2: number) {
    const direction = b.clone().sub(a);
    const object = new THREE.Mesh(new THREE.CylinderGeometry(r2, r1, direction.length(), 16), gold);
    object.position.copy(a).add(b).multiplyScalar(.5);
    object.quaternion.setFromUnitVectors(v(0, 1, 0), direction.normalize());
    figure.add(object);
  }
  // Contrapposto stance, with one leg braced behind the other.
  ellipsoid(-.18, 1.47, .08, .18, .075, .3);
  ellipsoid(.33, 1.47, -.15, .16, .075, .28);
  limb(v(-.18, 1.53, .04), v(-.24, 2.12, 0), .085, .13);
  limb(v(-.24, 2.12, 0), v(-.08, 2.7, 0), .13, .2);
  limb(v(.33, 1.53, -.16), v(.4, 2.06, -.2), .085, .13);
  limb(v(.4, 2.06, -.2), v(.12, 2.7, 0), .13, .2);
  ellipsoid(0, 2.71, 0, .3, .3, .2);
  ellipsoid(-.04, 3.16, 0, .31, .48, .21).rotation.z = -.12;
  ellipsoid(-.04, 3.39, .03, .38, .23, .23);
  limb(v(-.03, 3.54, 0), v(-.03, 3.75, 0), .115, .1);
  // Face, ears, hair and crown are fully volumetric, including the rear view.
  ellipsoid(-.02, 3.96, .025, .195, .255, .18);
  ellipsoid(-.19, 3.95, .02, .045, .075, .04);
  ellipsoid(.16, 3.95, .02, .045, .075, .04);
  ellipsoid(-.02, 3.97, .19, .04, .072, .055);
  ellipsoid(-.02, 3.85, .17, .07, .015, .022);
  for (const x of [-.09, .055]) {
    stroke([v(x-.035, 4.025, .17),v(x, 4.04, .185),v(x+.03, 4.025, .17)], .013, 8);
    ellipsoid(x, 3.996, .176, .018, .012, .012);
  }
  ellipsoid(-.02, 4.12, -.025, .205, .18, .18);
  for (let i=0;i<9;i++) {
    const angle=i/8*Math.PI;
    stroke([v(Math.cos(angle)*.18-.02,4.12,-.07),v(Math.cos(angle)*.21-.02,3.93,-.16),v(Math.cos(angle)*.18-.02,3.67,-.17)],.025,12);
  }
  const crown = new THREE.Mesh(new THREE.CylinderGeometry(.12,.2,.2,24),gold);
  crown.position.set(-.02,4.25,0); figure.add(crown);
  ellipsoid(-.02,4.39,0,.065,.08,.065);
  // Raised bow arm and drawing arm, bent toward the shoulder.
  const shoulder=v(.27,3.42,0), elbow=v(.55,3.87,.015), hand=v(.78,4.28,.03);
  limb(shoulder,elbow,.135,.105); ellipsoid(.55,3.87,.015,.105,.12,.105);
  limb(elbow,hand,.10,.065); ellipsoid(.78,4.28,.03,.08,.12,.075);
  limb(v(-.34,3.4,0),v(-.67,3.75,.04),.135,.1);
  ellipsoid(-.67,3.75,.04,.1,.11,.1);
  limb(v(-.67,3.75,.04),v(-.16,4.04,.24),.095,.065);
  ellipsoid(-.16,4.04,.24,.075,.08,.065);
  // Bow limbs curve away from the taut string and nocked arrow.
  stroke([v(.68,3.3,.02),v(1.06,3.66,.02),v(1.1,4.26,.02),v(.96,4.9,.02),v(.7,5.22,.02)],.034,64);
  stroke([v(.68,3.3,.02),v(-.16,4.04,.24),v(.7,5.22,.02)],.006,2);
  limb(v(-.34,3.98,.24),v(1.26,4.38,-.02),.012,.012);
  const arrowhead=new THREE.Mesh(new THREE.ConeGeometry(.04,.16,4),gold);
  arrowhead.position.set(1.3,4.39,-.025);
  arrowhead.quaternion.setFromUnitVectors(v(0,1,0),v(1,.25,-.16).normalize()); figure.add(arrowhead);
  // Draped dhoti: fluted, tapering cloth with individual gold fold ridges.
  const points=[v(.16,1.88,0),v(.22,2.06,0),v(.34,2.32,0),v(.32,2.62,0),v(.25,2.82,0)];
  const cloth=new THREE.LatheGeometry(points.map(p=>new THREE.Vector2(p.x,p.y)),48);
  const positions=cloth.getAttribute("position");
  for(let i=0;i<positions.count;i++) {
    const x=positions.getX(i),z=positions.getZ(i),y=positions.getY(i);
    const ripple=1+.08*Math.sin(Math.atan2(z,x)*14+y*3);
    positions.setXYZ(i,x*ripple,y,z*ripple*.72);
  }
  cloth.computeVertexNormals(); figure.add(new THREE.Mesh(cloth,gold));
  for(let i=0;i<7;i++) {
    const x=(i-3)*.08;
    stroke([v(x*.7,2.79,.19),v(x*1.1,2.48,.24),v(x*.8,2.16,.19),v(x*.55,1.97,.13)],.011,20);
  }
  stroke([v(-.31,3.52,.1),v(-.12,3.28,.23),v(.22,2.94,.18),v(.29,2.6,.15),v(.43,2.22,.05)],.065);
  // Belt and armlets give the silhouette a ceremonial finish.
  const belt=new THREE.Mesh(new THREE.TorusGeometry(.275,.026,8,40),gold);
  belt.rotation.x=Math.PI/2; belt.scale.y=.75; belt.position.y=2.79; figure.add(belt);
  ellipsoid(0,2.79,.21,.065,.065,.03);
}
