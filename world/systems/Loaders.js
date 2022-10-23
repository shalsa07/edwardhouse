import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js"
import{ PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'
import { LoadingManager, TextureLoader } from "three"
// import {} from '../thre/e.js/loaders'

class Loaders{
    constructor(camera,renderer,refArray,scene){
        this.refArray=refArray.progressCounter
        this.renderer=renderer
        this.scene=scene
        this.camera=camera
        this.dracoLoader=new DRACOLoader(this.loaderManager)
        this.dracoLoader.setDecoderPath("./draco/")
        
        this.loaderManager=new LoadingManager(
            ()=>{
                // this.disableProgresser()
                // setTimeout(this.disableProgresser(),10000)
                // console.log('loaded',document.querySelector(this.refArray[0]))
                return this.scene
            },
            (url,itemsLoad,itemsTotal)=>{
                // const progress=itemsLoad/itemsTotal
                // document.querySelector(this.refArray[2]).innerText=progress
                // console.log('loadeding',progress,url)
            })
        
        // console.log(document.querySelector(this.refArray[2]))
    }
    gltfLoader(){
        const gltfLoader=new GLTFLoader(this.loaderManager)
        gltfLoader.setDRACOLoader(this.dracoLoader)
        return gltfLoader
    }
    rgbeLoader(){
        const rgbeLoader=new RGBELoader(this.loaderManager)
        return rgbeLoader
    }
    textureLoader(){
        const textureLoader=new TextureLoader(this.loaderManager)
        return textureLoader
    }
    loadmanager(){
        const loadingManager=this.loaderManager
        return loadingManager
    }
    controls(){
        const controls=new OrbitControls(this.camera,this.renderer.domElement)
        return controls
    }
    controlsTrackBall(){
        const trackBall=new PointerLockControls(this.camera,this.renderer.domElement)
        return trackBall
    }
    disableProgresser(){
        document.querySelector(this.refArray[0]).style.display='none'
    }
}
export{Loaders}