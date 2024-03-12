import { LightningElement , api } from 'lwc';

export default class A091primitiveChild extends LightningElement {

    @api parentdanGeldi

   container='a'
@api  get parenttanGet(){

return this.container
}
 
set parenttanGet(data){

   // this.container = data
     this.container = data.toUpperCase() + ' ABI'
  //  this.container = this.container.toUpperCase() + ' ABI'
}




}