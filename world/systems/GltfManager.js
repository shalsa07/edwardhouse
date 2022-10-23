import { GltfModel } from "../components/GltfObjectAysnc.js"
import { Object } from "../components/Object.js"
import { GLTFElevationViews } from "../components/GLTFElevationViews.js"
import { GLTFModelOptionsCycle } from "../components/GLTFModelOptionsCycle.js"
import { GLTF360Cycle } from "../components/GLTF360Cycle.js"
import { GLTFRmSnapping } from "../components/GLTFRmSnapping.js"
import { Textures } from "../systems/Textures.js"
import { GUI } from "../systems/GUI.js"
import { Share } from "../systems/Share.js"
import { Fullscreen } from "../systems/Fullscreen.js"
import { BackSide, MeshBasicMaterial, Vector3 } from "three"

class GltfManager{
    constructor(ui,loader,scene,camera,refArray,controls){
        this.arMode=false
        this.ui=ui
        this.controls=controls
        this.camera=camera
        this.loader=loader
        this.scene=scene
        this.refArray=refArray
        this.modelGlobalSettings=refArray.enviSettings
        this.textureManager=new Textures(loader,scene)
        this.objs=new Object(scene)
        this.modelObj=this.scene.getObjectByName('model')
        this.modelProperties=this.refArray.models
        this.btnClose=document.querySelector(this.refArray.uiSettings.closeBtn.name)
        this.textureLoader=new Textures(loader,scene)
        this.gui=new GUI()
        this.fullScreenFunction=new Fullscreen()
        this.shareFunction=new Share()
        this.modelPositioning=new GLTFElevationViews(refArray,scene,loader,camera)
        this.model360sCycle=new GLTF360Cycle(refArray,scene,loader)
        this.modelRmSnapCycle=new GLTFRmSnapping(refArray,scene,loader,controls,camera)

        this.loadModels()

        /** */
        const progressBar=document.querySelector('#progress_bar')
        this.loader.loaderManager.onProgress = (url,itemsLoaded,itemsTotal)=>{
            const progress=itemsLoaded/itemsTotal
            progressBar.style.transform=`scaleX(${progress})`
            // console.log(`downloading files: ${itemsLoaded} of ${itemsTotal} files, Progress ${progressToDecimals}`)
        }

        /** */
        loader.loaderManager.onLoad=()=>{
            document.querySelector('#progress').style.display='none';
            // setTimeout(()=>document.querySelector('#progress').style.display='none',2000)            
        }
        /**
         * model poistion
         */
        this.modelPositioning.applyPosition(this.modelGlobalSettings.envContainer,this.modelGlobalSettings.position[0],this.modelGlobalSettings.position[1],this.modelGlobalSettings.position[2],this.modelGlobalSettings.position[3])

        /**
         * home btn
         */
        const btnHome=document.querySelector(`#${refArray.uiSettings.wrapperBottomBtns[0].name}`)
        btnHome.addEventListener('click',()=>{
            this.scene.getObjectByName('obj360Envi').visible=false
            this.scene.getObjectByName('model').visible=true
            this.controls.controlsDefault()
            this.modelPositioning.camDefaultView(this.refArray.camPosElevation)
        })

        /**
         * elevation views
         */
         const viewsSnapBtn=document.querySelector(`#${refArray.uiSettings.wrapperBottomBtns[1].name}`)

        this.modelPositioning.camDefaultView(this.refArray.camPosElevation,viewsSnapBtn)
        this.modelPositioning.camViews(this.refArray.camPosElevation,viewsSnapBtn)

        /**
         * rm snap views
         */
        //  const viewsSnapBtn=document.querySelector(`#${refArray.uiSettings.wrapperBottomBtns[1].name}`)

        this.modelRmSnapCycle.rmSnapCycle(this.refArray.rmCamPosAndNames,viewsSnapBtn)

        /**
         * color choice 
         *
        const rmSnapList=this.refArray.camPosElevation
        const rmSnapBtn=document.querySelector(`#${this.refArray.uiSettings.wrapperRightBtns[2].name}`)

        /**
         * share 
         */
        const shareBtn=document.querySelector(`#${this.refArray.uiSettings.wrapperRightBtns[2].name}`)

        this.shareFunction.shareContent(shareBtn)
        

        /**
         * fullscreen  
         */
        const fullScreenBtn=document.querySelector(`#${this.refArray.uiSettings.wrapperRightBtns[3].name}`)

        this.fullScreenFunction.toggleFullscreen(fullScreenBtn)
            
        /** */
        // console.log(refArray.uiSettings.wrapperRightBtns)
    }
    async loadModels(){

        /**
         * gltf model section
         */
        const modelList=this.refArray.enviSettings.names

        modelList.forEach(element => {
            const gltfModels= new GltfModel(element,this.loader,this.scene,this.refArray,this.controls,this.camera)
        })

        /**
         * Loader
         */
        this.loader.onStart = function (url,itemsLoaded,itemsTotal){
            console.log(`downloading file: ${url} ${itemsLoaded} of ${itemsTotal} files`)
        }
        /** */
    }
}
export {GltfManager}