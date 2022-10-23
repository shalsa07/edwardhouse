import { ARButton } from "./ARButton.js"
import {  Mesh, MeshBasicMaterial, RingBufferGeometry } from "three"

let currentSession
class AR{
    constructor(ui,renderer,resizer,scene,refArray){
        this.ui=ui
        this.renderer=renderer
        this.resizer=resizer
        this.scene=scene
        this.refArray=refArray

        // console.log(this.refArray.scale[0].scale)

        /**
         * ar toggle activation
         */
        const btnAR=document.querySelector(`#${refArray.uiSettings.wrapperBottomBtns[2]}`)
        btnAR.addEventListener('click',()=>this.startAr())

        /**
         * top model buttons
         */
        const btnScaleNormal=document.querySelector(`#${refArray.modelARSettings[0].name}`)
        const btnScaleHalf=document.querySelector(`#${refArray.modelARSettings[1].name}`)
        const btnScaleRealTime=document.querySelector(`#${refArray.modelARSettings[2].name}`)

        btnScaleNormal.onclick=()=>{
            this.scaleModel(refArray.scale[0])
            // console.log(`${this.refArray.scale[0].name} btn click`)
        }
        btnScaleHalf.onclick=()=>{
            this.scaleModel(refArray.scale[1])
            // console.log(`${this.refArray.scale[1].name} btn click`)
        }
        btnScaleRealTime.onclick=()=>{
            this.scaleModel(refArray.scale[2])
            // console.log(`${this.refArray.scale[2].name} btn click`)
        }

        // console.log(btnScaleNormal)
    }
    async startAr(){
        // console.log('ar enabled')
        const arWrapper=document.querySelector('#ar_container')
        arWrapper.style.display='inline'
        arWrapper.style.display='flex'
        
        this.sceneHide()

        // console.log(arWrapper)

        /* */
        //reticle generation
        const reticleGeometry=new RingBufferGeometry(.05,.075,32).rotateX(- Math.PI / 2)
        const reticleMat=new MeshBasicMaterial({color:0xffffff})
        const reticle=new Mesh(reticleGeometry,reticleMat)
        reticle.matrixAutoUpdate=false
        this.scene.add(reticle)

        this.renderer.xr.enabled=true

        const arButton=ARButton.createButton(this.renderer, {requiredFeatures: ['hit-test'], optionalFeatures: ['dom-overlay'], domOverlay: {root: document.body}});
        document.body.appendChild(this.renderer.domElement);
        document.body.appendChild(arButton)

        const controller=this.renderer.xr.getController(0)
        this.scene.add(controller)

        controller.addEventListener('select',()=>{
            this.sceneShow()
            this.scene.getObjectByName('model').position.setFromMatrixPosition(reticle.matrix)
            this.scaleModel(this.refArray.modelARSettings[0].scale)
                    
            console.log('ar select running')
        })

        this.renderer.xr.addEventListener('sessionstart',async ()=>{
            const session=this.renderer.xr.getSession()

            const viewerReferenceSpace=await session.requestReferenceSpace("viewer")
            const hitTestSource=await session.requestHitTestSource({
                space:viewerReferenceSpace
            })

            this.renderer.setAnimationLoop((timestamp,frame)=>{
                if(!frame) return

                const hitTestResults=frame.getHitTestResults(hitTestSource)

                if(hitTestResults.length){
                    const hit=hitTestResults[0]
                    const referenceSpace=this.renderer.xr.getReferenceSpace()
                    const hitPose=hit.getPose(referenceSpace)

                    reticle.visible=true
                    reticle.matrix.fromArray(hitPose.transform.matrix)
                }else{
                    reticle.visible=false
                }

                this.resizer.render()
            })
            // console.log('ar select running')
        })
        this.renderer.xr.addEventListener('sessionend',async ()=>{            
            // console.log('ar select running')
        })
    }
    async endAr(){
        this.sceneHide()
        currentSession.end()
        this.renderer.clear()
        this.renderer.setAnimationLoop(null)
        location.reload()
        // console.log('ar ended')
    }
    sceneHide(){
        this.scene.getObjectByName('model').visible=false
    }
    sceneShow(){
        this.scene.getObjectByName('model').visible=true
        // this.scene.getObjectByName('model').position.y=-.5
    }
    scaleModel(scale){
        this.scene.getObjectByName('model').scale.set(scale,scale,scale)
    }
}
export{AR}