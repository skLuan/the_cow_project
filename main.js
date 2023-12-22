import World  from "/src/World/World";

function main() {
    const container = document.querySelector(".cowProgram");

    const world = new World(container);

    world.start();
}

main();
