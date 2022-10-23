import { Mesh,BoxBufferGeometry,MeshBasicMaterial,Color, Points, SphereBufferGeometry, PointsMaterial, BackSide, DoubleSide } from "three"

class Object{
    constructor(scene){
        this.scene=scene
        // this.boxObject=this.boxObject()
        // this.pointsSphere=this.sphereObject()

        // console.log(scene);
    }
    boxObject(objName,x,y,z){
        const box=new Mesh(new BoxBufferGeometry,new MeshBasicMaterial({color:new Color(0xff0000)}))
        box.name=objName
        box.scale.set(x,y,z)
        this.scene.add(box)

        return box
    }
    spherePointsObject(objName,x,y,z){
        const pointsShere=new Points(new SphereBufferGeometry(x,y,z),new PointsMaterial({size:.0025,color:0x111111}))
        pointsShere.name=objName
        this.scene.add(pointsShere)
        // console.log(pointsShere)

        return pointsShere
    }
    sphereObj(objName,x,y,z){
        const roomObj=new Mesh(new SphereBufferGeometry(x,y,z),new MeshBasicMaterial({side:DoubleSide}))
        roomObj.name=objName
        this.scene.add(roomObj)
        // console.log(roomObj)

        return roomObj
    }
}
export{Object}