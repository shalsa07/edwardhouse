import { Textures } from "../systems/Textures"
import { GLTFLevelToggleCycle } from "../components/GLTFLevelToggleCycle.js"
import { GLTFModelOptionsCycle } from "../components/GLTFModelOptionsCycle.js"
import { GLTF360Cycle } from "../components/GLTF360Cycle"
import { Box3 } from "three"

let model,group
class GltfModel{
    constructor(element,loader,scene,refArray,controls,camera){
        this.scene=scene
        this.camera=camera
        this.controls=controls
        this.refArray=refArray
        this.modelSettings=refArray.modelARSettings[0]
        this.objFileNames=element
        this.loader=loader
        this.gltfLoader=this.loader.gltfLoader()
        this.textureManager=new Textures(loader)
        this.cycleLevels=new GLTFLevelToggleCycle(refArray,scene,loader)
        this.cycleOptions=new GLTFModelOptionsCycle(refArray,scene,loader)
        this.cycle360s=new GLTF360Cycle(refArray,scene,loader,controls,camera)

        // console.log(this.objFileNames)

        this.loadModel(this.objFileNames)
    }
    async loadModel(objFileNames){

        /** 
         * loading model
        */
        group=this.scene.getObjectByName(this.refArray.enviSettings.envContainer)
        const gltfModel=await this.gltfLoader.loadAsync(`./assets/${objFileNames}.glb`)
        model=gltfModel.scene
        model.name=objFileNames
        model.position.set(this.modelSettings.position[0]/100,this.modelSettings.position[1]/100,this.modelSettings.position[2]/100)
        model.rotation.y=Math.PI
        model.scale.set(this.modelSettings.scale,this.modelSettings.scale,this.modelSettings.scale)
        group.add(model)

        // console.log(size);

        const externalFilesRefList=this.refArray.gltfModels
        /**
         * level options snap views
         */
        this.cycleLevels.levelToggleCycle(externalFilesRefList,model)
        
        /**
         * model options cycle
         *
        this.cycleOptions.modelOptionsCycle(externalFilesRefList,model)
        
        /**
         * 360s options snap views
         */
        const ref360List=this.refArray.btns360sLow
        this.cycle360s.toogle360Cycle(ref360List,model)

        /** */
        
    }
}
export{GltfModel}