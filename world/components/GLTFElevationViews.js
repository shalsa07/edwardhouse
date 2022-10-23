class GLTFElevationViews{
    constructor(refArray,scene,loader,camera){
        this.refArray=refArray;
        this.scene=scene;
        this.loader=loader;
        this.camera=camera;

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
}
export{GLTFElevationViews}