import { api, LightningElement , wire} from 'lwc';
import {fireEvent}  from 'c/pubsub'
import { CurrentPageReference } from 'lightning/navigation';

export default class A11siblingPublisher extends LightningElement {
    @wire(CurrentPageReference)
    pageRef;


    
    handleClick( ){
var isim = { name:'John' , age:49 }
fireEvent(this.pageRef, 'salesforceRadio', isim)
    } 




    @api recordId
    @api objectApiName
}