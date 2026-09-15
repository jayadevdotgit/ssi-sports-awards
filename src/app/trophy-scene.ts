import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

export function createTrophyScene(host: HTMLDivElement, onFailure: () => void) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
  renderer.debug.checkShaderErrors = false;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.domElement.setAttribute("aria-hidden", "true");
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 60);
  camera.position.set(0, 2.8, 10.1);
  camera.lookAt(0, 2.6, 0);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  const environment = pmrem.fromScene(room, 0, 0.1, 100, { size: 128 });
  scene.environment = environment.texture;
  room.dispose();

  const gold = new THREE.MeshPhysicalMaterial({ color: 0xd6a653, metalness: 1, roughness: 0.19, clearcoat: 0.7, clearcoatRoughness: 0.12, envMapIntensity: 1.6, side: THREE.DoubleSide });
  const dark = new THREE.MeshPhysicalMaterial({ color: 0x070808, metalness: 0.25, roughness: 0.3, envMapIntensity: 0.3, specularIntensity: 0.25 });
  const stone = new THREE.MeshPhysicalMaterial({ color: 0x101211, metalness: 0, roughness: 1, envMapIntensity: 0, specularIntensity: 0 });
  const grain = new Uint8Array(256 * 256 * 4);
  for (let i = 0; i < 256 * 256; i++) {
    const value = 100 + Math.floor((Math.sin(i * 127.1) * 43758.5453 % 1 + 1) * 65);
    grain.set([value, value, value, 255], i * 4);
  }
  const grainTexture = new THREE.DataTexture(grain, 256, 256);
  grainTexture.wrapS = grainTexture.wrapT = THREE.RepeatWrapping;
  grainTexture.repeat.set(4, 4);
  grainTexture.needsUpdate = true;
  stone.bumpMap = grainTexture; stone.bumpScale = 0.09;
  gold.roughnessMap = grainTexture;
  const trophy = new THREE.Group();
  scene.add(trophy);

  function mesh(geometry: THREE.BufferGeometry, material: THREE.Material, y: number, parent: THREE.Object3D = trophy) {
    const object = new THREE.Mesh(geometry, material);
    object.position.y = y;
    parent.add(object);
    return object;
  }
  function beveledBlock(width: number, height: number, depth: number, taper = 1) {
    const geometry = new RoundedBoxGeometry(width, height, depth, 3, 0.045);
    const positions = geometry.getAttribute("position");
    for (let i = 0; i < positions.count; i++) {
      const scale = 1 - (1 - taper) * (positions.getY(i) / height + 0.5);
      positions.setXYZ(i, positions.getX(i) * scale, positions.getY(i), positions.getZ(i) * scale);
    }
    geometry.computeVertexNormals();
    return geometry;
  }
  mesh(beveledBlock(1.65, 1.14, 1.42, 0.73), dark, 0.78);
  mesh(beveledBlock(1.75, 0.09, 1.52), gold, 0.19);
  mesh(beveledBlock(1.68, 0.045, 1.45), dark, 0.26);
  mesh(beveledBlock(1.26, 0.085, 1.08), gold, 1.37);

  // Sculptural, tapered metal ribbons wrap around an elevated gold sphere.
  for (let ribbon = 0; ribbon < 3; ribbon++) {
    const vertices: number[] = [];
    const indices: number[] = [];
    const uvs: number[] = [];
    const segments = 96, sides = 12;
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const angle = ribbon * Math.PI * 2 / 3 + t * Math.PI * 0.88;
      const radius = 0.13 + Math.pow(Math.sin(t * Math.PI * 0.9), 1.65) * 0.86;
      const width = 0.008 + (0.09 + Math.sin(t * Math.PI) * 0.30) * (1 - Math.pow(t, 8));
      const thickness = 0.009 + Math.sin(t * Math.PI) * 0.045;
      const y = 1.4 + t * (3.9 - ribbon * 0.16);
      for (let j = 0; j <= sides; j++) {
        const cross = j / sides * Math.PI * 2;
        const across = Math.cos(cross) * width;
        const depth = Math.sin(cross) * thickness;
        vertices.push(Math.cos(angle) * (radius + depth) - Math.sin(angle) * across,
          y + across * 0.3, Math.sin(angle) * (radius + depth) + Math.cos(angle) * across);
        uvs.push(j / sides, t);
        if (i < segments && j < sides) {
          const a = i * (sides + 1) + j, b = a + sides + 1;
          indices.push(a, b, a + 1, b, b + 1, a + 1);
        }
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    mesh(geometry, gold, 0);
  }
  mesh(new THREE.SphereGeometry(0.44, 32, 24), gold, 4.22);

  let labelTexture: THREE.Texture | undefined;
  const labelCanvas = document.createElement("canvas");
  labelCanvas.width = labelCanvas.height = 256;
  const labelContext = labelCanvas.getContext("2d");
  if (labelContext) {
    labelContext.fillStyle = "#080808";
    labelContext.fillRect(0, 0, 256, 256);
    labelContext.fillStyle = "#d6a653";
    labelContext.textAlign = "center";
    labelContext.font = "bold 78px sans-serif";
    labelContext.fillText("SSI", 128, 128);
    labelContext.font = "18px sans-serif";
    labelContext.fillText("SPORTS AWARDS", 128, 163);
  }
  labelTexture = new THREE.CanvasTexture(labelCanvas);
  labelTexture.colorSpace = THREE.SRGBColorSpace;
  const labelMaterial = new THREE.MeshBasicMaterial({ map: labelTexture, toneMapped: false });
  // Each plaque faces outward and follows the taper of its side of the base.
  for (let side = 0; side < 4; side++) {
    const face = new THREE.Group();
    face.rotation.y = side * Math.PI / 2;
    trophy.add(face);
    const halfDepth = (side % 2 === 0 ? 1.42 : 1.65) / 2;
    const label = mesh(new THREE.PlaneGeometry(0.91, 0.91), labelMaterial, 0.8, face);
    label.position.z = halfDepth * (1 - 0.27 * (0.8 - 0.21) / 1.14) + 0.014;
    label.rotation.x = -Math.atan(halfDepth * 0.27 / 1.14);
  }

  const rockGeometry = new THREE.IcosahedronGeometry(1.85, 3);
  const rockPositions = rockGeometry.getAttribute("position");
  for (let i = 0; i < rockPositions.count; i++) {
    const x = rockPositions.getX(i), y = rockPositions.getY(i), z = rockPositions.getZ(i);
    const noise = Math.sin(x * 11 + z * 7) * Math.cos(y * 13 + x * 5) * 0.065 + Math.sin(x * 29 + y * 17 + z * 23) * 0.023;
    rockPositions.setXYZ(i, x * (1 + noise), y * (1 + noise), z * (1 + noise));
  }
  rockGeometry.computeVertexNormals();
  const rock = mesh(rockGeometry, stone, -0.18, scene);
  rock.scale.set(1.22, 0.18, 0.92);
  rock.rotation.y = 0.18;
  const ring = mesh(new THREE.TorusGeometry(2.45, 0.008, 6, 96), gold, -0.13, scene);
  ring.rotation.x = Math.PI / 2;
  const glow = new THREE.PointLight(0xffba63, 12, 9);
  glow.position.set(-2, 4, 3); scene.add(glow);
  const key = new THREE.DirectionalLight(0xffe7b2, 4);
  key.position.set(3, 7, 4); scene.add(key);
  const rim = new THREE.DirectionalLight(0xffffff, 3);
  rim.position.set(-3, 4, -2); scene.add(rim);
  scene.add(new THREE.AmbientLight(0xffd9a2, 0.25));

  const dustPositions: number[] = [];
  for (let i = 0; i < 70; i++) {
    const seed = (n: number) => (Math.sin(n * 127.1) * 43758.5453) % 1;
    dustPositions.push(seed(i + 1) * 4, Math.abs(seed(i + 71)) * 6, -1 - Math.abs(seed(i + 141)) * 3);
  }
  const dustGeometry = new THREE.BufferGeometry();
  dustGeometry.setAttribute("position", new THREE.Float32BufferAttribute(dustPositions, 3));
  const dust = new THREE.Points(dustGeometry, new THREE.PointsMaterial({ color: 0xcba46a, size: 0.018, transparent: true, opacity: 0.55, depthWrite: false }));
  scene.add(dust);

  let paused = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let visible = true;
  let angle = -0.22;
  let targetX = 0;
  let targetY = 0;
  let frame = 0;
  let lastTime = 0;
  let disposed = false;
  let dirty = true;
  let touchX: number | null = null;
  function render(time: number) {
    if (disposed) return;
    const delta = Math.min((time - lastTime) / 1000, 0.05); lastTime = time;
    if (visible && !document.hidden) {
      if (!paused) {
        angle += delta * 0.13;
        trophy.rotation.y += (angle + targetX - trophy.rotation.y) * 0.035;
        trophy.rotation.x += (targetY - trophy.rotation.x) * 0.04;
        dust.rotation.y += delta * 0.012;
      }
      if (!paused || dirty) renderer.render(scene, camera);
      dirty = false;
      host.dataset.rotation = trophy.rotation.y.toFixed(4);
    }
    frame = requestAnimationFrame(render);
  }
  function resize() {
    const { width, height } = host.getBoundingClientRect();
    if (!width || !height) return;
    camera.aspect = width / height;
    camera.position.z = camera.aspect < 0.75 ? 11.7 : 10.1;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    renderer.render(scene, camera);
  }
  function pointer(event: PointerEvent) {
    if (event.pointerType === "touch") {
      if (touchX !== null) {
        angle += (event.clientX - touchX) * 0.008;
        trophy.rotation.y = angle; dirty = true; touchX = event.clientX;
      }
      return;
    }
    const rect = host.getBoundingClientRect();
    targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.8;
    targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.14;
  }
  function pointerDown(event: PointerEvent) { if (event.pointerType === "touch") touchX = event.clientX; }
  function resetPointer() { targetX = 0; targetY = 0; touchX = null; }
  function keydown(event: KeyboardEvent) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault(); angle += event.key === "ArrowLeft" ? -0.25 : 0.25;
      trophy.rotation.y = angle; renderer.render(scene, camera);
    }
  }
  function lost(event: Event) { event.preventDefault(); disposed = true; cancelAnimationFrame(frame); onFailure(); }
  const sizeObserver = new ResizeObserver(resize); sizeObserver.observe(host);
  const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }); intersection.observe(host);
  host.addEventListener("pointermove", pointer); host.addEventListener("pointerleave", resetPointer); host.addEventListener("keydown", keydown);
  host.addEventListener("pointerdown", pointerDown); host.addEventListener("pointerup", resetPointer); host.addEventListener("pointercancel", resetPointer);
  renderer.domElement.addEventListener("webglcontextlost", lost);
  resize(); frame = requestAnimationFrame(render);
  // The first frame is already rendered. A logo download must not hide the trophy.
  const ready = Promise.resolve();
  void new THREE.TextureLoader().loadAsync("/images/ssi-logo.jpg").then((texture) => {
    if (disposed) { texture.dispose(); return; }
    labelTexture?.dispose();
    labelTexture = texture;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    labelMaterial.map = texture;
    labelMaterial.needsUpdate = true;
    renderer.render(scene, camera); dirty = true;
  }).catch(() => { /* Keep the local SSI plaque if the image is unavailable. */ });
  return {
    ready,
    setPaused(value: boolean) { paused = value; dirty = true; },
    dispose() {
      disposed = true; cancelAnimationFrame(frame);
      sizeObserver.disconnect(); intersection.disconnect();
      host.removeEventListener("pointermove", pointer); host.removeEventListener("pointerleave", resetPointer); host.removeEventListener("keydown", keydown);
      host.removeEventListener("pointerdown", pointerDown); host.removeEventListener("pointerup", resetPointer); host.removeEventListener("pointercancel", resetPointer);
      renderer.domElement.removeEventListener("webglcontextlost", lost);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points) object.geometry.dispose();
      });
      gold.dispose(); dark.dispose(); stone.dispose(); grainTexture.dispose(); labelMaterial.dispose(); labelTexture?.dispose();
      (dust.material as THREE.Material).dispose(); environment.dispose(); pmrem.dispose(); renderer.dispose(); renderer.domElement.remove();
    },
  };
}
