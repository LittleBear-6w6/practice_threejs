import * as THREE from "three";

const init = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const render = new THREE.WebGL1Renderer({
    canvas: document.getElementById("canvas"),
    antialias: true,
  });
  render.setSize(width, height);
  render.setPixelRatio(window.devicePixelRatio);
  render.setClearColor("#000000");

  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
  camera.position.z = 6;
  camera.position.x = 2;
  camera.position.y = 0.5;

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshPhongMaterial({
    color: "#ffffff",
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = Math.PI * 0.2;
  mesh.rotation.y = Math.PI * 0.25;

  const geometry2 = new THREE.BoxGeometry(1, 1, 1);
  const material2 = new THREE.MeshPhongMaterial({
    color: "#ffff00",
  });
  const mesh2 = new THREE.Mesh(geometry2, material2);
  mesh2.rotation.x = Math.PI * 0.2;
  mesh2.rotation.y = Math.PI * 0.25;
  //   mesh2.position.x = 0.3;
  mesh2.position.x = 1;
  //   mesh2.position.y = 1;

  const light = new THREE.PointLight();
  light.position.x = 10;
  light.position.y = 0.5;
  light.position.z = 2.5;
  light.intensity = 2;

  const scene = new THREE.Scene();
  //   console.log(scene);
  scene.add(mesh);
  scene.add(mesh2);
  scene.add(light);
  // 座標軸を挿入　x:Red y:green z:blue
  scene.add(new THREE.AxesHelper(20));
  // グリッド表示
  scene.add(new THREE.GridHelper(10,5));

  render.render(scene, camera);
};

if (document.readyState === "complete") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}
