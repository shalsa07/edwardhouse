import { Fullscreen } from "./Fullscreen.js"
import { Share } from "./Share.js"

class UIElements{
    constructor(refArray){
        this.share=new Share();
        this.fullsrn=new Fullscreen();
        this.refArray=refArray;
        
        const progress=document.querySelector(this.refArray.uiSettings.closeBtn.name);
        const bottomNavBar=document.querySelector('#bottom_container');
        const rightNavBar=document.querySelector('#right_container');

        const bottomNavList=this.refArray.uiSettings.wrapperBottomBtns;
        const rightNavList=this.refArray.uiSettings.wrapperRightBtns;

        /**
         * bottom nav btns
         */
        bottomNavList.forEach(element => {
            this.createElement(element,'div',bottomNavBar,this.refArray.uiSettings.btnNameCSS[3])
            this.addIcon(element)
        });

         /**
         * right nav btns
         */
        rightNavList.forEach(element => {
            this.createElement(element,'div',rightNavBar,this.refArray.uiSettings.btnNameCSS[3])
            // document.querySelector(`#${element.name}`).style.marginTop='30px'
            // document.querySelector(`#${element.name}`).style.marginBottom='30px'
            this.addIcon(element)
        });

        /**
         * create rm wrapper
         */
        

        /**
         * create 360s wrapper
         */
        

        /**
         * create colors wrapper
         */
        

        // console.log(bottomNavList,bottomNavBar,rightNavBar);
    }
    createElement(elementObj,elementType,elementToAppendTo,classNames){
        // console.log(elementObj);
        const btn=document.createElement(elementType);
        btn.setAttribute('id',elementObj.name);
        btn.setAttribute('class',classNames);
        elementToAppendTo.append(btn);
    }
    addIcon(elementObj){
        // console.log(elementObj);
        const btn=document.querySelector(`#${elementObj.name}`)
        btn.innerHTML=elementObj.icon
    }
    
}
export{UIElements}
