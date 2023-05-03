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

  const vec = new THREE.Vector3(1,2,3);
  vec.x = 9;
  console.log(vec);

  vec.set(4,5,6);
  console.log(vec);

  vec.setScalar(7);
  console.log(vec);

}

if (document.readyState === "complete") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }