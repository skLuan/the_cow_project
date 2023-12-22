import {
  Color,
  Scene,
} from "three";

function createScene(){
const _color = 'skyblue';

const scene = new Scene();
scene.background = new Color(_color);
return scene;
}
export {createScene}