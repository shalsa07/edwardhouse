import * as dat from "../systems/dat.gui.module.js"

class GUI{
    constructor(){
        /** */
        // this.gui=new dat.GUI()
        // this.gui.closed=true

        /** */
        // console.log(this.gui)
    }
    positionGUI(obj,objName){
        // console.log(obj)
        this.gui.add(obj.position,'x',-100,100,.005).name(`${objName} Sideways`)
        this.gui.add(obj.position,'y',-100,100,.005).name(`${objName} Up/Down`)
        this.gui.add(obj.position,'z',-100,100,.005).name(`${objName} Front/Back`)
    }
    positionGUIInFolder(obj,objName){
        const modelPositionFolder=this.gui.addFolder(`${objName} Position`)
        modelPositionFolder.add(obj.position,'x',-100,100,.005).name('Model Sideways')
        // modelPositionFolder.add(obj.position,'y',-1,1,.0005).name('Model Up/Down')
        modelPositionFolder.add(obj.position,'z',-100,100,.005).name('Model Front/Back')
    }
    scaleGUI(obj,objName,objScale){
        const modelScaleFolder=this.gui.addFolder(`${objName} Scale`)
        modelScaleFolder.add(obj.scale,'x',0,objScale,.005).name('Model ScaleX')
        modelScaleFolder.add(obj.scale,'y',0,objScale,.005).name('Model ScaleY')
        modelScaleFolder.add(obj.scale,'z',0,objScale,.005).name('Model ScaleZ')
    }
    rotationGUI(obj,objName){
        this.gui.add(obj.rotation,'y',-3.1159,3.14159,.0001).name(`${objName} Rotation`)
    }
}
export{GUI}