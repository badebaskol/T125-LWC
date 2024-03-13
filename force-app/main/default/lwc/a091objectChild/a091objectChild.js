import { LightningElement , api } from 'lwc';

export default class A091objectChild extends LightningElement {

@api childMusteri


container
@api  get getParentdanObj(){

return this.container

}

set getParentdanObj(data){

//let geciciContainer = { ...data }   // shalow copy 
//let geciciContainer = Object.assign({} , data)

let geciciContainer = JSON.parse(JSON.stringify(data)); // deep copy


geciciContainer.name = geciciContainer.name.toUpperCase() + ' ABI'
geciciContainer.age = geciciContainer.age - 5


this.container = geciciContainer;
}




}