import './style.css';

import { World } from "./world/World.js";

async function main() {
    const container=document.querySelector('#webgl')
    const world=new World(container)
    await world.init()
    world.render()

    // console.log(world)
}
main()
// .catch((err)=>{console.log(err)})
