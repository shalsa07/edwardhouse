import { EquirectangularReflectionMapping } from "three"

class EnviLighting{
    constructor(scene,loader,refArray){
        this.rgbeLoaderMap=refArray.enviSettings.envMap
        this.scene=scene
        this.loader=loader
        this.rgbeLoader=this.loader.rgbeLoader()

        this.textureLighting()
        // console.log(this.rgbeLoaderMap)
    }
    textureLighting(){
        this.rgbeLoader.load(`./textures/${this.rgbeLoaderMap}`,(texture)=>{
            texture.mapping=EquirectangularReflectionMapping
            this.scene.environment=texture
            // this.scene.background=texture
            // console.log(texture)
        })
    }
}
export{EnviLighting}