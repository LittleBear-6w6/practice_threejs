import * as THEE from "three";

const init = () => {
  const scene = new THEE.Scene();
  console.log(scene);
};

if (document.readyState === "complete") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}
