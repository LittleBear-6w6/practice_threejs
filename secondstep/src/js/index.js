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
}