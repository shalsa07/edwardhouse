import { ACESFilmicToneMapping, LinearEncoding, ReinhardToneMapping, sRGBEncoding, WebGLRenderer } from "three"

/** */
function createRenderer() {
    const renderer=new WebGLRenderer({alpha:true,antialias:true})
    renderer.physicallyCorrectLights=true
    renderer.outputEncoding=sRGBEncoding
    renderer.toneMapping = ReinhardToneMapping
    renderer.toneMappingExposure = 2.2

    // console.log(renderer)
    return renderer
}
export{createRenderer}