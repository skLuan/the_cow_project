import {
  Mesh,
  MeshMatcapMaterial,
  MeshStandardMaterial,
  BoxGeometry,
  MathUtils,
} from "three";
function gradosARadianes(grados) {
  return MathUtils.degToRad(grados);
}
const _mt = 1.5;

function createCube() {
  const _color = "cornsilk";
  const material = new MeshStandardMaterial({ color: _color });
  const geometry = new BoxGeometry(_mt, _mt, _mt);
  const cube = new Mesh(geometry, material);


  cube.tick = (delta) => {
    const rotation = gradosARadianes(3.6);
    cube.rotation.z += rotation * delta;
    cube.rotation.x += rotation * delta;
    cube.rotation.y += rotation * delta;
  };
  // -------- mini cube
  const geometryMini = new BoxGeometry(0.4, 0.4, 0.4);
  const materialMini = new MeshStandardMaterial({ color: "purple" });
  const miniCube = new Mesh(geometryMini, materialMini);
  miniCube.position.set(0, 2, 0);
  miniCube.rotation.set(gradosARadianes(30), 0, -1);

  miniCube.tick = (delta) => {
    const rotation = gradosARadianes(360);
    miniCube.rotation.z -= rotation * delta;
    miniCube.rotation.x -= rotation * delta;
    miniCube.rotation.y -= rotation * delta;
    
    // miniCube.position.x += 1*delta;

  };
  window.addEventListener('keydown', (e) => {
    switch (e.key) {
      case "l":
        break;
    
      default:
        break;
    }
  });

  cube.rotation.set(gradosARadianes(45), gradosARadianes(45), 0);
  cube.add(miniCube);
  // cube.rotateZ(gradosARadianes(45));
  return cube;
}



function miniCube(cube) {
  return cube.children[0];
}

function createBasicCube() {
  const material = new MeshMatcapMaterial();
  const geometry = new BoxGeometry(_mt, _mt, _mt);
  const cube = new Mesh(geometry, material);
  cube.rotateX(gradosARadianes(45));
  cube.rotateY(gradosARadianes(45));
  return cube;
}

export { createCube, createBasicCube, miniCube };