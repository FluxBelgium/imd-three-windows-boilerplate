import {
    AmbientLight,
    DirectionalLight,
    Mesh,
    PerspectiveCamera,
    PlaneGeometry,
    Scene,
    Vector3,
    WebGLRenderer,
    BoxGeometry,
    MeshStandardMaterial,
    TextureLoader,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { GUI } from "three/addons/libs/lil-gui.module.min.js";

import { WindowFrame } from "./classes/WindowFrame";

// Loaders.
const textureLoader = new TextureLoader();
const gltfLoader = new GLTFLoader();

// TODO: add DRACO compression.

// TODO: load environment map.

// Three.js stuff.
// - canvas container
const canvasContainer = document.querySelector("#canvasContainer");

// - renderer
const renderer = new WebGLRenderer({ alpha: true, antialias: true });
canvasContainer.appendChild(renderer.domElement);
renderer.setPixelRatio(1);
// TODO: enable shadows.

// - scene
const scene = new Scene();
// TODO: add scene environment.

// - camera
const camera = new PerspectiveCamera(50);
camera.position.set(0, 0.5, 2);
camera.lookAt(new Vector3(0, 0, 0));
// - controls
const controls = new OrbitControls(camera, renderer.domElement);

// Resize function.
resize();
window.addEventListener("resize", resize);
function resize() {
    renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
    camera.aspect = canvasContainer.clientWidth / canvasContainer.clientHeight;
    camera.updateProjectionMatrix();
}

// Objects.
const cube = new Mesh(
    new BoxGeometry(),
    new MeshStandardMaterial({ color: "red" })
);
scene.add(cube);

const windowFrame = new WindowFrame(1, 1);

// TODO: add wall

const floor = new Mesh(
    new PlaneGeometry(100, 100),
    new MeshStandardMaterial()
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -1;
scene.add(floor);

// Lights.
const ambientLight = new AmbientLight("#FFFFFF", 0.5);
scene.add(ambientLight);

const directionalLight = new DirectionalLight("#FFFFFF", 1.5);
directionalLight.position.set(-0.75, 1, 1.25);
scene.add(directionalLight);
// TODO: add light shadow.

// Add GUI.
const gui = new GUI();
const guiVars = {
    width: 1,
    height: 1,
    rotation: 0,
    color: "#FFFFFF",
};
// TODO: add parameters to lil-gui.

// TODO: add stats.js

// Render loop.
window.requestAnimationFrame(loop);
function loop() {
    renderer.render(scene, camera);

    window.requestAnimationFrame(loop);
}

export { scene, gltfLoader, textureLoader };
