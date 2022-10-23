import { Object } from "../components/Object.js"
import { Textures } from "../systems/Textures.js"
import { BackSide, MeshBasicMaterial, Vector3 } from "three" 

class GLTF360Cycle{
    constructor(refArray,scene,loader,controls,camera){
        this.refArray=refArray;
        this.textureLoader=new Textures(loader,scene);
        this.scene=scene;
        this.camera=camera;
        this.controls=controls;
        this.loader=loader
        this.sphere360=scene.getObjectByName('obj360Envi');

        //360 btn
        this.btn=document.querySelector(`#${refArray.uiSettings.wrapperRightBtns[1].name}`);

        //progress element
        this.progressLoader=document.querySelector('#progress');

        // console.log(progressLoader);
    }

    toogle360Cycle(objList,model){

        const modelOptions=[this.refArray.gltfModels[0].name];

        const [option_1_360s,option_2_360s,option_3_360s]=[objList[0],objList[1],objList[2]];

        let objNameValue=-1;
        
        this.btn.addEventListener('click',()=>{
            
            objNameValue++;

            this.progressLoader.style.display='inline'
            
            this.scene.getObjectByName(this.refArray.enviSettings.envContainer).visible=false;

            this.modelVisibleTestFor360Match(option_1_360s,objNameValue);

            /** *
            if(model.name===modelOptions[0]&&model.visible){
                // console.log('option 1 visible');
                this.modelVisibleTestFor360Match(option_1_360s,objNameValue);
            }else if(model.name===modelOptions[1]&&model.visible){
                // console.log('option 2 visible');
                this.modelVisibleTestFor360Match(option_2_360s,objNameValue);
            }else if(model.name===modelOptions[2]&&model.visible){
                // console.log('option 3 visible');
                this.modelVisibleTestFor360Match(option_3_360s,objNameValue);
            }

            /** */
            this.loader.loaderManager.onLoad=()=>{
                this.progressLoader.style.display='none'
            }
            
            if(objNameValue>=option_1_360s.length-1){
                objNameValue=-1
                return objNameValue
            }
            
            // console.log(objNameValue);
        })
    }
    modelVisibleTestFor360Match(obj360sList,objNameValue){

        // console.log(`${model.name} visible`,obj360sList,objNameValue);

        this.camera.position.set(0,0,0.001)

        this.controls.controlsFPSView()

        this.sphere360.visible=true;
        this.sphere360.rotation.x=Math.PI;
        this.sphere360.rotation.y=Math.PI/.675;

        const list360Cycle=obj360sList

        this.sphere360.material.map=this.textureLoader.textureLoad(list360Cycle[objNameValue])

        // console.log(`${model.name} visible`,`${this.sphere360.name} visible`,list360Cycle[objNameValue])
    }
}
export{GLTF360Cycle}