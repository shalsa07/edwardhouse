import { MeshBasicMaterial, sRGBEncoding, TextureLoader,RepeatWrapping } from "three"
let objMaterial
class Textures{
    constructor(loader,scene){
        this.textureLoader=loader.textureLoader()
        this.scene=scene
        // this.objID=objID

        // this.matMeshBasicMap('baked_Grd_plaster(1)')
        // this.matMapApplied()
        // console.log(this.loadManager)
    }
    textureLoading(){
        const textureLoad=this.textureLoader

        return textureLoad
    }
    textureLoad(mapName){
        const mapsPath=mapName
        const map=this.textureLoader.load(`./textures/${mapName}.jpg`)
        map.encoding=sRGBEncoding
        map.flipY=false

        return map
    }
    textureRepeatLoad(mapName,x,y){
        console.log(mapName);
        const mapsPath=mapName
        const map=this.textureLoader.load(`./textures/${mapName}.jpg`)
        map.flipY=false
        map.repeat.set(x,y)
        map.warpS=RepeatWrapping
        map.warpT=RepeatWrapping

        return map
    }
    textureSet(){
        
    }
}
export{Textures}