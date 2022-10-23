class GLTFRmSnapping{
    constructor(refArray,scene,loader,controls,camera){
        this.refArray=refArray;
        this.scene=scene;
        this.loader=loader;
        this.controls=controls
        this.camera=camera
        this.modelObj=scene.getObjectByName(refArray.enviSettings.envContainer)
        
        this.btn=document.querySelector(`#${this.refArray.uiSettings.wrapperRightBtns[0].name}`);
        this.roomsList=refArray.rmCamPosAndNames

        // console.log(this.roomsList);
    }

    rmSnapCycle(viewObjList){
        // console.log(viewObjList.length-1,viewObjList);
        
        let objNameValue=-1;
        
        this.btn.addEventListener('click',()=>{
            objNameValue++

            this.camera.position.set(0,0,0.001)
            this.controls.controlsFPSView()
            this.modelObj.position.set(viewObjList[objNameValue].pos[0]/100,viewObjList[objNameValue].pos[1]/100,viewObjList[objNameValue].pos[2]/100)
            this.modelObj.rotation.y=viewObjList[objNameValue].pos[3]

            if(objNameValue>viewObjList.length-2){
                objNameValue=-1;
                return objNameValue
            }
        })
    }  

}
export{GLTFRmSnapping}