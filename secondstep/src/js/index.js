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
  camera.position.z = 3;

// -------  ベクトル作成 ------
  const vec = new THREE.Vector3(1,2,3);
  vec.x = 9;
  console.log(vec);

  vec.set(4,5,6);
  console.log(vec);

  vec.setScalar(7);
  console.log(vec);
// --------------------------

// -------- 複数メッシュのグループ化 ------------
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const geometry2 = new THREE.RingGeometry(1,2,5);
  const material = new THREE.MeshPhongMaterial({
    color: "#ffffff",
  });
  const material2 = new THREE.MeshPhongMaterial({
    color: "#FF7D81",
  });
  
  const meshA = new THREE.Mesh(geometry,material);
  meshA.scale.set(2,0.1,0.1);
  const meshB = new THREE.Mesh(geometry,material);
  meshB.scale.set(0.1,2,0.1);

  const meshC = new THREE.Mesh(geometry2,material2);
  meshC.scale.set(0.5,0.5,0.5);

  const group = new THREE.Group();
  group.add(meshA);
  group.add(meshB);
  group.add(meshC);

  group.rotation.x = Math.PI * 0.2;
  group.rotation.y = Math.PI * 0.25;

// ----------------------------------------

  const light = new THREE.PointLight('#ffffff');
    light.position.x = 0.5;
    light.position.y = 0.5;
    light.position.z = 2.5;

    const scene = new THREE.Scene();
    scene.add(group);
    scene.add(light);
    scene.add(group);

    render.render(scene, camera);
}

if (document.readyState === "complete") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }