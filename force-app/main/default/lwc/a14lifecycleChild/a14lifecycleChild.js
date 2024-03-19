import { LightningElement } from 'lwc';

export default class A14lifecycleChild extends LightningElement {



    constructor(){
        super()
        
    }
 
connectedCallback(){

    throw new Error('Bu Error CHILD da olustu !!!!')


   // window.addEventListener('click', this.handleDinle)

   // alert('CHILD connectedCallback  calisti ')

}

handleDinle(){
    console.log('EKRANA CLICK edildi')
} 



renderedCallback(){
 

}


disconnectedCallback(){
 
    window.removeEventListener('click', this.handleDinle)

}

errorCallback(){

  

}
    

}