import { LightningElement , wire} from 'lwc';
import {registerListener , unregisterAllListeners}  from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class A11siblingReciever extends LightningElement {
    @wire(CurrentPageReference)
    pageRef;

    connectedCallback(){

        registerListener('salesforceRadio',this.handleCallback,this)
        
    }
 
    name
    age
    handleCallback(detail){

       // this.name = 'this is the name I gave : Alexsander'
        let container ={...detail}
        container.name = container.name.toUpperCase()
      this.name= container.name 
      this.age=container.age  -10
      //this.age= parseInt(container.age)  -10
       alert('This alert is triggered by   **** ' + detail.name + '  *****  ')
    }


    disconnectedCallback(){
        unregisterAllListeners(this)
    }
}