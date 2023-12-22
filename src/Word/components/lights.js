import { DirectionalLight, Color, PointLight } from "three";

function createDirectionalLight() {
    const _color = 'white';
    const color = new Color(_color);
    const light = new DirectionalLight(color.getHex, 6);
    light.position.set(10,10,10);
    return light;
}

function createPointLight() {
    const _color = "fuchsia";
    const color = new Color(_color);
    const light = new PointLight(color.getHexString, 500);
    light.position.set(4, 10, 10);
    return light;
}

export { createDirectionalLight, createPointLight };