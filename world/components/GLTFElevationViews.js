import gsap from 'gsap'

class GLTFElevationViews{
    constructor(refArray,scene,loader,camera){
        this.refArray=refArray;
        this.scene=scene;
        this.loader=loader;
        this.camera=camera;
        this.gsap=gsap

        this.objNameValue=0;

        // console.log(this.refArray.uiSettings.wrapperBottomBtns);
    }
    applyPosition(objName,x,y,z,radians){
        this.scene.getObjectByName(objName).position.set(x/100,y/100,z/100,radians);
    }
    camDefaultView(viewObjList){
        const x=viewObjList[5].pos[0];
        const y=viewObjList[5].pos[1];
        const z=viewObjList[5].pos[2];
        
        this.camera.position.set(x,y,z);
    }
    camViews(viewObjList,btn){
        // console.log(viewObjList[5]);

        btn.addEventListener('click',()=>{
            const x=viewObjList[this.objNameValue].pos[0]
            const y=viewObjList[this.objNameValue].pos[1]
            const z=viewObjList[this.objNameValue].pos[2]
            // this.camViews(this.refArray.camPosElevation)
            for (let index = 0; index < viewObjList.length; index++) {
                if(this.objNameValue<viewObjList.length-1){
                    this.objNameValue++
                    // console.log(objNameValue);
                    this.camera.position.set(x,y,z);
                    return
                }
                this.objNameValue=-1
            }
        })

    }

    camViewsWithTween(viewObjList,btn){
        /** */
        btn.addEventListener('click',()=>{
            const xMovment=viewObjList[this.objNameValue].pos[0]
            const yMovment=viewObjList[this.objNameValue].pos[1]
            const zMovment=viewObjList[this.objNameValue].pos[2]

            this.objNameValue++
            for (let index = 0; index < viewObjList.length; index++) {
                if(this.objNameValue<viewObjList.length-1){
                    const cameraMovement=gsap.to(this.camera.position,
                        {
                            duration:1,
                            x:xMovment,
                            y:yMovment,
                            z:zMovment,
                            ease:"circ.out",
                            onStart:()=>{
                                document.querySelector('#progress').style.display='inline';
                            },
                            onComplete:()=>{
                                document.querySelector('#progress').style.display='none';
                            }
                        }
                    )
                    return
                }
                if(objNameValue>=objList.length-1){
                    objNameValue=-1
                    return objNameValue
                }
                // this.objNameValue=-1
            }
        })
    }

    modelElevationMovementWithTween(obj,viewObjList,btn,controls){
        /** */
        let objNameValue=0-1;
        btn.addEventListener('click',()=>{

            controls.disbleControls()

            this.camera.position.set(0,0,-1)

            objNameValue++

            const easing="power1.out"
            const duration=3
            const xMovment=viewObjList[objNameValue].pos[0]/100
            const yMovment=viewObjList[objNameValue].pos[1]/100
            const zMovment=viewObjList[objNameValue].pos[2]/100
            const radianXMovement=viewObjList[objNameValue].pos[3]
            const radianYMovement=viewObjList[objNameValue].pos[4]

            console.log(objNameValue);

            gsap.to(obj.position,
                {
                    duration:duration,
                    x:xMovment,
                    y:yMovment,
                    z:zMovment,
                    ease:easing,
                })
            gsap.to(obj.rotation,
                {
                    duration:duration,
                    y:radianXMovement,
                    ease:easing,
                })
            gsap.to(obj.rotation,
                {
                    duration:duration,
                    x:radianYMovement,
                    ease:easing,
                })
            // for (let index = 0; index < viewObjList.length; index++) {
            //     if(this.objNameValue<viewObjList.length-1){
            //         return
            //     }
                // this.objNameValue=-1
            // }
            if(objNameValue>=viewObjList.length-2){
                objNameValue=-1
                return objNameValue
            }
        })
    }
}
export{GLTFElevationViews}