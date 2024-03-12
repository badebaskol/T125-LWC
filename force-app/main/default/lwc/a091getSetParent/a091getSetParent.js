import { LightningElement , track } from 'lwc';

export default class A091getSetParent extends LightningElement {
// primitive data
isim='a'
handleIsim(event){
this.isim = event.target.value
}

}