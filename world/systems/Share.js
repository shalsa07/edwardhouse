class Share{
    constructor(){
        this.sharedata={
            title: 'luyari',
            text: 'experience design',
            url: 'https://gnorthresidence.netlify.app/'
        }
        // this.shareContent()
    }
    shareContent(btn){
        btn.addEventListener('click',()=>{
            navigator.share(this.sharedata)
        })
    }
}
export{Share}