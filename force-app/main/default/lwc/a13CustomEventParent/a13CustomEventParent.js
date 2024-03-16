import { LightningElement } from 'lwc';

export default class A13CustomEventParent extends LightningElement {

    bilgi=''
    handleElma(){
        this.bilgi='BAKIN BEN GELDIM'
    }

//primitive data gonder

childPrimitiveBilgi=''

handleKiraz(event){

this.childPrimitiveBilgi=event.detail

}

//object alma 

musteri={
    isim:'Mahmut',
    yas:55
}

handleAyva(event){
    this.musteri=event.detail
}




}