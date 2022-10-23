import { AmbientLight, DirectionalLight } from "three"
class Lights{
    constructor(scene){
        this.scene=scene
        this.directLighting=new DirectionalLight()
        this.ambientLighting=new AmbientLight()

        // this.directLight()
        // this.ambientLight()
    }
    directLight(){
        this.directLighting.intensity=5
        this.directLighting.position.set(-2,2,2)
        this.scene.add(this.directLighting)
    }
    ambientLight(){
        this.scene.add(this.ambientLighting)
    }
}
export{Lights}