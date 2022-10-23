import { PerspectiveCamera } from "three"

class Camera{
    constructor(container,scene){
        this.camera=new PerspectiveCamera(55,container.clientWidth/container.clientHeight,.001,2)
        scene.add(this.camera)
        
        // console.log(this.camera)
        return this.camera
    }
}
export{Camera}