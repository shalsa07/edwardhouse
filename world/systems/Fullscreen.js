class Fullscreen{
    constructor(){
        this.webglElement=document.querySelector('#webgl')
        // this.toggleFullscreen
        // console.log(this.webglElement)
    }
    toggleFullscreen(btn){
        btn.addEventListener('click',()=>{
            if(!this.webglElement.fullscreenElement){
                this.webglElement.requestFullscreen()
                // console.log('enter fullsceen')
            }else{
                if(this.webglElement.exitFullscreen){
                    this.webglElement.exitFullscreen()
                }
            }
        })
    }
}
export{Fullscreen}