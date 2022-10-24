class Controls{
    constructor(loader){
        this.controls=loader.controls()
        
        this.controlsDefault()
        // console.log(this.loader);
    }
    controlsDefault(){
        // this.controls.autoRotate=true
        this.controls.enabled=true
        this.controls.autoRotateSpeed=.1
        this.controls.enableDamping=true
        this.controls.enablePan=false
        this.controls.maxPolarAngle=1.53589
        this.controls.minPolarAngle=0
        this.controls.minDistance=20/100
        this.controls.maxDistance=45/100
        this.controls.target.set(0,0,0)
        this.controls.rotateSpeed=.35
        // console.log(this.controls.minDistance,this.controls.maxDistance)
    }
    controlsFPSView(){
        this.controls.maxPolarAngle=2.0944
        this.controls.minPolarAngle=1.0472
        this.controls.minDistance=0.001
        this.controls.maxDistance=.0035
        this.controls.target.set(0,0,0)
        this.controls.autoRotate=false
    }
    disbleControls(){
        this.controls.enabled=false
        // this.controls.autoRotate=false
        // this.controls.dispose()
    }
    tick(){
        this.controls.update()
    }
}
export{Controls}