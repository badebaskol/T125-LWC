import { LightningElement, wire  } from 'lwc';
import getContacts from '@salesforce/apex/ContactControllerCalisma.cntListCall';
import getContactsFiltre from '@salesforce/apex/ContactControllerCalisma.cntListWithFiltre';

export default class B02Calisma extends LightningElement {

//@wire (getContacts) Contacts

cntListesi
cntHata
@wire(getContactsFiltre , {  cntfiltre:'$filtre'     })
contactListesi({data,error}){

    if(data){
    this.cntListesi = data
    this.cntHata = undefined
    }else if( error){
   this.cntHata = error
   this.cntListesi = undefined
    }


}

filtre='AAA'

handleCnt(event){
this.filtre=event.target.value;
}

}