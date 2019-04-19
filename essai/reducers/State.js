import React, { Component } from 'react';








const tab=[{name:"Omar l 'artisto",image:'https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-9/14316924_1793763197549630_8938611823470237228_n.jpg?_nc_cat=101&_nc_ht=scontent.ftun12-1.fna&oh=c688d938ada0117ee8bd8cd17480a112&oe=5D02C64F',link:'', lieu:'Tunis', Promowedding:'30%off',promoother:'40%',weddingdress:'available',eventdress:'available'}
,{name:'Wissem bel Agha',image:'https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-9/12472377_922855867783321_6736311610301519686_n.jpg?_nc_cat=107&_nc_ht=scontent.ftun12-1.fna&oh=70d5d11b06fe263b5c98b8a1c7bcb466&oe=5D156320', lieu:'tunis', Promowedding:'30%off',promoother:'40%',weddingdress:'available',eventdress:'available'}
,{name:"lobna ben Ammar",image:'https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-9/54018113_2063821256986758_3508817719090741248_n.jpg?_nc_cat=106&_nc_ht=scontent.ftun12-1.fna&oh=a2519c53a78909453bb78a003a93e78f&oe=5D15E2B3',link:'', lieu:'Lac 2', Promowedding:'30%off',promoother:'40%',weddingdress:'available',eventdress:'available'}
,{name:' Espace Amani',image:'https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-9/54356019_2384328974932774_5318786945592066048_n.jpg?_nc_cat=105&_nc_ht=scontent.ftun12-1.fna&oh=9c48ef8294c0a38bb018779278885434&oe=5D42E8B9', lieu:'tunis', Promowedding:'30%off',promoother:'40%',weddingdress:'available',eventdress:'available'},
{name:"Espace Wahiba",image:'https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-9/48395610_2330438377026309_5127214988825460736_n.jpg?_nc_cat=102&_nc_ht=scontent.ftun12-1.fna&oh=984ddd19fb6957c96597aa93407cf949&oe=5D450A70', lieu:'Tunis', Promowedding:'30%off',promoother:'40%',weddingdress:'available',eventdress:'available'}
,{name:'Jamila Lhdiri',image:'https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-9/51351611_2291192157567228_7050873421286080512_n.jpg?_nc_cat=109&_nc_ht=scontent.ftun12-1.fna&oh=6385470a289432df203deacb03a1987f&oe=5D4D633E', lieu:'sousse', Promowedding:'30%off',promoother:'40%',weddingdress:'available',eventdress:'available'},
{name:'Fekir',image:'https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-9/52053763_1265742613566066_4231662467354198016_n.jpg?_nc_cat=111&_nc_ht=scontent.ftun12-1.fna&oh=c2d35e8d5c08e38790a2e3b12358ff0b&oe=5D4C0487', lieu:'Monastir', Promowedding:'30%off',promoother:'40%',weddingdress:'available',eventdress:'available'},
{name:'Sabrina Houfi',image:'https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-9/16266167_1371919319548404_609850667950947711_n.jpg?_nc_cat=106&_nc_ht=scontent.ftun12-1.fna&oh=c889b900fc2554523a09b77679b198ae&oe=5D0E16C0', lieu:'tunis', Promowedding:'30%off',promoother:'40%',weddingdress:'available',eventdress:'available'}
     ]



     const Center = (state=tab,action) => {
       
       
        switch(action.type){ 
            case 'SEARCH' : return state.filter(elt => elt.title === action.keyword)
            default  :return  state;
        }



    }
    export default Center;