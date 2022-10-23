class Ticker{
    constructor(renderer,resizer,objectsTick){
        this.renderer=renderer
        this.objectsTick=objectsTick
        this.resizer=resizer

        renderer.setAnimationLoop(() => 
        {
            resizer.render()
            objectsTick.forEach(element => {
                element.tick()
            });
        })
        // console.log(this.objectsTick)
    }
    tick(){

    }
}
export{Ticker}