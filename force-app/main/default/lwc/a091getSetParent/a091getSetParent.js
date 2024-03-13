import { LightningElement , track } from 'lwc';

export default class A091getSetParent extends LightningElement {
// primitive data
isim='a'
handleIsim(event){
this.isim = event.target.value
}


// @track
musteri={
    isim:'Hasan',
    yas:35
}

handleMusteriIsim(event){

   // this.musteri.isim= event.target.value

this.musteri ={ ...this.musteri ,    isim: event.target.value     }


}
handleMusteriYAS(event){
  //  this.musteri.yas= event.target.value
  
this.musteri ={ ...this.musteri ,    yas: event.target.value     }

}

//  child object gonderme

@track
customer={
    name:'John',
    age:45
}

handleCustomerIsim(event){
this.customer.name = event.target.value
}


handleCustomerYAS(event){
   // this.customer.age = event.target.value
    this.customer ={ ...this.customer ,    age: event.target.value     }
}





}