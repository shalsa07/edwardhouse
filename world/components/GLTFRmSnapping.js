import gsap from 'gsap'
class GLTFRmSnapping{
    constructor(refArray,scene,loader,controls,camera){
        this.refArray=refArray;
        this.scene=scene;
        this.loader=loader;
        this.controls=controls
        this.camera=camera
        this.modelObj=scene.getObjectByName(refArray.enviSettings.envContainer)
        this.gsap=gsap
        
        this.btn=document.querySelector(`#${this.refArray.uiSettings.wrapperRightBtns[0].name}`);
        this.roomsList=refArray.rmCamPosAndNames

        // console.log(this.roomsList);
    }

    rmSnapCycle(viewObjList,btn){
        // console.log(viewObjList.length-1,viewObjList);
        
        let objNameValue=-1;
        
        btn.addEventListener('click',()=>{
            objNameValue++

            const xMovement=viewObjList[objNameValue].pos[0]/100
            const yMovement=viewObjList[objNameValue].pos[1]/100
            const zMovement=viewObjList[objNameValue].pos[2]/100
            const radianMovement=viewObjList[objNameValue].pos[3]

            this.camera.position.set(0,0,0.001)
            this.controls.controlsFPSView()
            this.modelObj.position.set(xMovement,yMovement,zMovement)
            this.modelObj.rotation.y=viewObjList[objNameValue].pos[3]

            if(objNameValue>viewObjList.length-2){
                objNameValue=-1;
                return objNameValue
            }
        })
    }    

    rmSnapCycleWithGsap(viewObjList,btn){
        console.log(viewObjList);
            
            const xMovement=viewObjList[0]/100
            const yMovement=viewObjList[1]/100
            const zMovement=viewObjList[2]/100
            const radianMovement=viewObjList[3]

            console.log(xMovement,yMovement,zMovement,radianMovement);
            
            // this.modelObj.position.set(xMovement,yMovement,zMovement)

            const rmSnapWithGsap=this.gsap.to(this.modelObj.position,
                {
                    duration:2.5,
                    x:xMovement,
                    y:yMovement,
                    z:zMovement,
                    ease:"circ.out",
                }
            )
            // rmSnapWithGsap=this.gsap.to(this.modelObj.rotation,
            //     {
            //         duration:2.5,
            //         y:radianMovement,
            //         ease:"circ.out",
            //     }
            // )
            this.modelObj.rotation.y=radianMovement
    }    

    rmSnapCycleWithGsapCycle(viewObjList,btn){
        // console.log(viewObjList.length-1,viewObjList);
        
        let objNameValue=-1;
        
        btn.addEventListener('click',()=>{
            objNameValue++
            
            const xMovement=viewObjList[objNameValue].pos[0]/100
            const yMovement=viewObjList[objNameValue].pos[1]/100
            const zMovement=viewObjList[objNameValue].pos[2]/100
            const radianMovement=viewObjList[objNameValue].pos[3]
            
            this.camera.position.set(0,0,0.001)
            this.controls.controlsFPSView()
            // this.modelObj.position.set(xMovement,yMovement,zMovement)
            const rmSnapWithGsap=this.gsap.to(this.modelObj.position,
                {
                    duration:2.5,
                    x:xMovement,
                    y:yMovement,
                    z:zMovement,
                    ease:"circ.out"
                }
            )
            this.modelObj.rotation.y=viewObjList[objNameValue].pos[3]

            if(objNameValue>viewObjList.length-2){
                objNameValue=-1;
                return objNameValue
            }
        })
    }    

}
export{GLTFRmSnapping}