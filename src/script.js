import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, 0);
// scene.add(mesh);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000
);
camera.position.set(1, 2, 7);
scene.add(camera);

// position.length를 1로 변경함
// mesh.position.normalize();

//axes helper
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

//원점부터의 거리
console.log(mesh.position.length());

//두 object 사이의 거리
console.log(mesh.position.distanceTo(camera.position));

mesh.scale.set(2, 1, 1);

//축꼬임 막기
mesh.rotation.reorder("YXZ");

//PI는 180
mesh.rotation.y = Math.PI * 0.25;
mesh.rotation.x = Math.PI * 0.2;

// camera.lookAt(mesh.position);

const group = new THREE.Group();

const mesh2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xffffff })
);

group.add(mesh);
group.add(mesh2);
mesh.position.x = 2;

scene.add(group);

group.rotation.x = 2;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
