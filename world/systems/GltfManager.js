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
import gsap from 'gsap'

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
        this.gsap=gsap
        this.xMovement=this.modelGlobalSettings.position[0]/100
        this.yMovement=this.modelGlobalSettings.position[1]/100
        this.zMovement=this.modelGlobalSettings.position[2]/100
        this.radianYMovement=this.modelGlobalSettings.position[3]
        this.radianXMovement=0

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
         
        this.gsapControls("power1.out",3,this.radianYMovement)

        /**
         * home btn
         */
        const btnHome=document.querySelector(`#${refArray.uiSettings.wrapperBottomBtns[0].name}`)
        btnHome.addEventListener('click',()=>{
            // console.log('home btn clicked');
            this.scene.getObjectByName('obj360Envi').visible=false
            this.scene.getObjectByName('model').visible=true
            this.controls.controlsDefault()
            this.modelPositioning.camDefaultView(this.refArray.camPosElevation,btnHome)
            this.gsapControls("power1.out",3,this.radianYMovement)
        })

        /**
         * elevation views
         */
         const viewsSnapBtn=document.querySelector(`#${refArray.uiSettings.wrapperBottomBtns[1].name}`)

        this.modelPositioning.camDefaultView(this.refArray.camPosElevation,viewsSnapBtn)
        this.modelPositioning.modelElevationMovementWithTween(this.modelObj,this.refArray.modelPosElevation,viewsSnapBtn,this.controls)

        /**
         * rm snap views
         */
        const rmSnapBtn=document.querySelector(`#${this.refArray.uiSettings.wrapperRightBtns[0].name}`);
        this.modelRmSnapCycle.rmSnapCycleWithGsapCycle(this.refArray.rmCamPosAndNames,rmSnapBtn)

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

    gsapControls(easing,duration,radian){
        // const easing="power1.out"
        // const duration=1.5

        this.gsap.to(this.modelObj.position,{
            duration:duration,
            x:this.xMovement,
            y:this.yMovement,
            z:this.zMovement,
            ease:easing
        })
        this.gsap.to(this.modelObj.rotation,{
            duration:duration,
            y:radian,
            ease:easing
        })
        this.gsap.to(this.modelObj.rotation,{
            duration:duration,
            x:this.radianXMovement,
            ease:easing
        })
        // console.log(this.modelObj,this.camera);
    }
}
export {GltfManager}