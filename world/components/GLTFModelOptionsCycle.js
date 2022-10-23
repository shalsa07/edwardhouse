class GLTFModelOptionsCycle{
    constructor(refArray,scene,loader){
        this.refArray=refArray;
        this.scene=scene;
        this.loader=loader;
        
        this.btn=document.querySelector(`#${refArray.uiSettings.wrapperRightBtns[0].name}`)

        // console.log(this.refArray.uiSettings.wrapperBottomBtns);
    }

    modelOptionsCycle(objList,objModel){
        // console.log(objList);
        objList.forEach(element => {
            if(objModel.getObjectByName(element.name)){
                objModel.visible=false;
            }
        });

        if(objModel.getObjectByName(objList[0].name)){
            objModel.visible=true;
        }

        // console.log(this.scene.getObjectByName('model').children);

        let objNameValue=0;
        
        this.btn.addEventListener('click',()=>{

            objNameValue++;
            /** */
            objList.forEach(element => {
                if(objModel.getObjectByName(element.name)){
                    objModel.visible=false;
                }
            });
    
            if(objModel.getObjectByName(objList[objNameValue].name)){
                objModel.visible=true;
            }

            if(objNameValue>=objList.length-1){
                objNameValue=-1
                return objNameValue
            }
        })

    }
}
export{GLTFModelOptionsCycle}