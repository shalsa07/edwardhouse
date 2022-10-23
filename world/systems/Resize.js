// import {  } from "module";

class Resize{
    constructor(container,renderer,scene,camera){
        this.container=container
        this.renderer=renderer
        this.scene=scene
        this.camera=camera

        this.setSize()
    }
    setSize(){
        this.renderer.setSize(this.container.clientWidth,this.container.clientHeight)
        this.renderer.setPixelRatio(window.devicePixelRatio)
    }
    render(){
        this.renderer.render(this.scene,this.camera)
    }
    onResize(){
        this.renderer.setSize(this.container.clientWidth,this.container.clientHeight)
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.camera.aspect=this.container.clientWidth/this.container.clientHeight
        this.camera.updateProjectionMatrix()
        this.render()
    }
}
export{Resize}