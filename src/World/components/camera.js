import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    100 // far clipping plane
  );
  camera.position.set(0, 0, 10);
  let isGoing = true;
  let isback = false;
  camera.tick = (delta) => {
    const move = 1 * delta;

    if (isGoing) {
      camera.position.z += move;
    } else if(isback) {
      camera.position.z -= move;
    }
  };

  window.addEventListener("keypress", (e) => {
    switch (e.key) {
      case "s" || "S":
        console.log("sisaaa");
        isGoing = !isGoing;
        isback? isback = false : undefined;
        break;
        case "w" || "W":
          isback = !isback;
          isGoing ? isGoing = false : undefined;
      break;
      default:
        break;
    }
  });

  return camera;
}

export { createCamera };