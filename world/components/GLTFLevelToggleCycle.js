class GLTFLevelToggleCycle{
    constructor(refArray,scene,loader){
        this.refArray=refArray;
        this.scene=scene;
        this.loader=loader;

        this.levelToggleBtn=document.querySelector(`#${refArray.uiSettings.wrapperBottomBtns[2].name}`)

        // console.log(this.refArray);
    }
    levelToggleCycle(objList,model){

        objList.forEach(element => {
            // console.log(element);
            /** */
            const objLevelList=element.levels

            this.levelToggleBtn.addEventListener('click',()=>{
                if(model.getObjectByName(objLevelList[1]) && model.getObjectByName(objLevelList[1]).visible){
                    model.getObjectByName(objLevelList[1]).visible=false
                    // console.log('levels btn clicked');
                }
                else if(model.getObjectByName(objLevelList[0]) && model.getObjectByName(objLevelList[0]).visible){
                    model.getObjectByName(objLevelList[0]).visible=false
                    // console.log('levels btn clicked');
                }
                else if(model.getObjectByName(objLevelList[1]) && !model.getObjectByName(objLevelList[1]).visible && !model.getObjectByName(objLevelList[1]).visible && model.getObjectByName(objLevelList[1])){
                    model.getObjectByName(objLevelList[0]).visible=true
                    model.getObjectByName(objLevelList[1]).visible=true
                }
            })
            /** */
        });
    }
}
export{GLTFLevelToggleCycle}