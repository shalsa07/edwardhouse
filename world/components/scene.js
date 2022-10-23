import { Group, Scene } from "three"
import{Object} from '../components/Object.js'

function createScene(loader) {
    const scene=new Scene()
    // scene.background='black'
    const group=new Group()
    group.name='model'
    scene.add(group)

    const objCreator=new Object(scene)
    const sphere360=objCreator.sphereObj('obj360Envi',.5,32,32)
    sphere360.visible=false

    // console.log(scene)
    return scene
}
export{createScene}