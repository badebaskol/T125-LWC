import { LightningElement } from 'lwc';

export default class B01Calisma extends LightningElement {

name="Ahmet";
name2="Mehmet";

firstName='';
lastName='';
fullName='';


firstNameHandler(event){
    this.firstName=event.target.value;
}

lastNameHandler(event){
    this.lastName=event.target.value;
}

get fullName(){
    return `${this.firstName}  ${this.lastName}`;
}
}