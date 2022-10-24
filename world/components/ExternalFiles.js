class ExtFilesArray{
    constructor(){
        this.enviSettings={
            envContainer:'model',
            envMap:'enviMap_512.hdr',
            scale:[1,0.05,0.025],
            names:['Edwards house'],
            position:[8,0,-12,3.14*2],
            gltfModel_furn:{
                title:'furn',
                levels:['opt_1_furn_1st'],
                familyRmFurn:['furn_family_rm_001','furn_family_rm_002']}
        }

        this.gltfModels=[
            {
                name:'Option 1',
                levels:['opt_1_1st','opt_1_roof'],
                objNames:['model','main_Plan_opt_1',"opt_1_site","opt_1_grd_bake_walls","opt_1_grd_bake_textured","opt_1_1st_bake_walls","opt_1_1st_bake_texured","opt_1_roof_bake_walls"],
                furnName1:'furn_1st_FamRm_1',
                furnVisibility1:false,
                furnName2:'furn_1st_FamRm_2',
                furnVisibility2:true
            }
        ]

        this.camPosElevation=[
            {
                name:'front',
                pos:[0,3.5,50,-6.28319]
            },
            {
                name:'back',
                pos:[0,8.5,-50,0]
            },
            {
                name:'left',
                pos:[50,3.5,0,0]
            },
            {
                name:'right',
                pos:[-50,18,0,0]
            },
            {
                name:'top',
                pos:[0,150,0,0]
            }
            ,
            {
                btnName:'views',
                name:'zoom-extents',
                pos:[100,35,100,0]
            }
        ]

        this.modelPosElevation=[
            {
                name:'front',
                pos:[-8,0,0,3.14,0]
            },
            {
                name:'left',
                pos:[-15,0,0,1.5708,0]
            },
            {
                name:'back',
                pos:[8,0,0,0,-0.349066]
            },
            {
                name:'right',
                pos:[10,0,0,-1.5708,-0.261799]
            },
            {
                name:'top',
                pos:[-8,15,10,-3.14,-1.5708]
            }
            ,
            {
                btnName:'views',
                name:'zoom-extents',
                pos:[100,35,100,0]
            }
        ]

        this.levelCycle=['roof','1stflr']

        this.rmCamPosAndNames=[
            {
                name:'entrance',
                pos:[-7,-1,-30,0.207]
            }
            ,
            {
                name:'driveway',
                pos:[-9,-1,-20,0]
            }
            ,
            {
                name:'pool',
                pos:[12,-.85,-30,3.14]
            }
            ,
            {
                name:'pool-Deck',
                pos:[-11,-.85,5,0]
            }
            ,{
                name:'balcony',
                pos:[-11,-4.2,0,0]
            }
            ,
            {
                name:'tv-room',
                pos:[12.5,-1.1,-.5,3.14]
            }
            ,
            {
                name:'foyer',
                pos:[-8,-1.1,-8,0]
            }
            ,
            {
                name:'lounge',
                pos:[20,-1.1,-9,3.14]
            }
            ,
            {
                name:'kitchen',
                pos:[4,-1.2,-2.5,3.14]
            }
            ,
            {
                name:'master-Bedrm',
                pos:[15.5,-1.1,1.5,1.57]
            }
            ,
            {
                name:'gym',
                pos:[7,-1.1,4.5,1.57]
            }          
        ]

        this.btns360sLow=[
            ['low/360-1','low/360-2','low/360-3','low/360-4']
            // ,
            // ['low/Option 2 3600001','low/Option 2 3600002','low/Option 2 3600003','low/Option 2 3600004','low/Option 2 3600005','low/Option 2 3600006']
            // ,
            // ['low/Option 3 3600001','low/Option 3 3600002','low/Option 3 3600003','low/Option 3 3600004','low/Option 3 3600005','low/Option 3 3600006']
        ]
        
        this.btns360sHigh=[
            ['high/Option 1 3600001','high/Option 1 3600002','high/Option 1 3600003','high/Option 1 3600004','high/Option 1 3600005','high/Option 1 3600006']
            ,
            ['high/Option 2 3600001','high/Option 2 3600002','high/Option 2 3600003','high/Option 2 3600004','high/Option 2 3600005','high/Option 2 3600006']
            ,
            ['high/Option 3 3600001','high/Option 3 3600002','high/Option 3 3600003','high/Option 3 3600004','high/Option 3 3600005','high/Option 3 3600006']
        ]

        this.modelARSettings=[
            {
                name:'reset',
                scale:'.01',
                position:[0,0,0]
            }
            ,
            {
                name:'scale-half-size',
                scale:'0.025',
                position:[9.73,0,0]
            }
            ,
            {
                name:'real-world',
                scale:'1',
                position:[0,0,0]
            }
        ]

        this.gltfModel_furn={
            title:'furn',
            levels:['opt_1_furn_1st'],
            familyRmFurn:['furn_family_rm_001','furn_family_rm_002']
        }

        this.uiSettings={
            wrapperBottomBtns:[
                                {
                                    name:'home',
                                    icon:`<i class='bx bx-home-alt'></i>`,
                                    class:'btns'
                                }
                                ,
                                {
                                    name:'views',
                                    icon:`<i class='bx bx-camera' ></i>`,
                                    class:'btns'
                                }
                                ,
                                {
                                    name:'levels',
                                    icon:`<i class='bx bx-list-ul' ></i>`,
                                    class:'btns'
                                }
                                ,
                                {
                                    name:'AR',
                                    icon:'ar',
                                    class:'btns'
                                }],
            wrapperRightBtns:[
                                // {
                                //     name:'options',
                                //     icon:`<i class='bx bx-dots-horizontal-rounded' ></i>`,
                                //     class:'btns'
                                // }
                                // ,
                                {
                                    name:'rmSnaps',
                                    icon:`<i class='bx bx-mobile-landscape'></i>`,
                                    class:'btns'
                                }
                                // ,
                                // {
                                //     name:'color',
                                //     icon:`<i class='bx bx-color-fill'></i>`,
                                //     class:'btns'
                                // }
                                ,
                                {
                                    name:'btn360s',
                                    icon:`<i class='bx bx-street-view' ></i>`,
                                    class:'btns'
                                }
                                ,
                                {
                                    name:'share',
                                    icon:`<i class='bx bx-share-alt' ></i>`,
                                    class:'btns'
                                }
                                ,
                                {
                                    name:'fullscreen',
                                    icon:`<i id="fullscreen" class='bx bx-fullscreen' id="fullscreen"></i>`,
                                    class:'btns'
                                }],
            closeBtn:{
                            name:'btn_close',
                            icon:`<i class='bx bx-x'></i>`
                        },
            createBtnsIds:['div','id','class'],
            btnNameCSS:['views_wrapper','btn_in_wrapper','views','btns'],
            progressCounter:{
                                name:'progress'
                            }
        }

        //apple web xr url
        this.webXr=['https://apps.apple.com/us/app/webxr-viewer/id1295998056']

        this.progressCounter=['#progress','#loader','#progress_counter','progress_text']
        /** */
    }
}
export{ExtFilesArray}