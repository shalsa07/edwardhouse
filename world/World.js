import {createScene} from "./components/scene.js"
import {Camera} from "./components/Camera.js"
import {createRenderer} from "./components/Renderer.js"
import { Lights } from "./components/Lights.js"

import { Resize } from "./systems/Resize.js"
import { AR } from "./systems/AR _hittest.js"
import { Loaders } from "./systems/Loaders.js"
import { Controls } from "./systems/ControlsOrbit.js"
import { Ticker } from "./systems/Ticker.js"
import { EnviLighting } from "./systems/EnviLight.js"
import { Statistics } from "./systems/Stats.js"
import { GltfManager } from "./systems/GltfManager.js"
import { UIElements } from "./systems/UI.js"
import { ExtFilesArray } from "./components/ExternalFiles.js"

let renderer,scene,camera
let resizer,loader,controls,tick,objectsTick
let refArray,ui
class World{
    constructor(container){
        this.container=container
        refArray=new ExtFilesArray()
        ui=new UIElements(refArray)

        scene=createScene()
        camera=new Camera(container,scene)
        renderer=createRenderer()
        container.append(renderer.domElement)
        
        loader=new Loaders(camera,renderer,refArray,scene)
        controls=new Controls(loader)
        
        const enviLighting=new EnviLighting(scene,loader,refArray)
        const lighting=new Lights(scene)
        
        objectsTick=[]
        objectsTick.push(controls)
        
        resizer=new Resize(container,renderer,scene,camera)
        window.addEventListener('resize',()=>resizer.onResize())
        
        tick=new Ticker(renderer,resizer,objectsTick)       
        
        // console.log(scene)
    }
    async init(){
        const gltfManager=new GltfManager(ui,loader,scene,camera,refArray,controls)
        // const ar=new AR(ui,renderer,resizer,scene,refArray)
        // console.log(ui)
    }
    render(){
        resizer.render()
    }
}
export {World}