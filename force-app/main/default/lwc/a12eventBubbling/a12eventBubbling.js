import { LightningElement } from 'lwc';

export default class A12eventBubbling extends LightningElement {



    innerClick=0
    middleClick=0
    outerClick=0
    
    middelInfo=0
    outerInfo=0

    dedeBilgi
    handleOuterclick(){
this.outerClick++

    }


  

    handleMiddleclick(){
      
        this.middleClick++

      
   
    }

   
    handleInnerclick(){

        this.innerClick++
       
    }


}