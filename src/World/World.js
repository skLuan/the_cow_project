import { createCamera } from "./components/camera";
import { createScene } from "./components/scene";
import { createCube, createBasicCube, miniCube } from "./components/cube";
import {
  createDirectionalLight,
  createPointLight,
} from "./components/lights";

import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop";

let camera, renderer, scene, light, loop; // MInimo para que three js funcione

class World {

  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    light = createDirectionalLight();
    const pointLightOne = createPointLight();
    container.append(renderer.domElement);
    loop = new Loop(camera, scene,renderer);
    const cube = new createCube();
    const basicCube = new createBasicCube();
    basicCube.position.set(1.5, 0, 0);
    cube.position.set(-1.5, 0, 0);

    loop.updatables.push(cube, miniCube(cube), camera);
    scene.add(cube, basicCube, pointLightOne);
    // scene.add(sphere);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    renderer.render(scene, camera);
  }
  start() {
    loop.start();
  }
  stop(){
    loop.stop();
  }
}

export { World };