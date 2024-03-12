import { LightningElement ,wire } from 'lwc';
import accountListesiniGetir from '@salesforce/apex/AccountContoller.accountGetir'

import accFiltrele from '@salesforce/apex/AccountContoller.accountFiltrele'

export default class A08WireFiltre extends LightningElement {

      
    accListesi
    accHata
    @wire(accFiltrele , {  accName:'$accFiltre'     })
    accountListesi({data,error}){
    
        if(data){
        this.accListesi = data
        this.accHata = undefined
        }else if( error){
       this.accHata = error
       this.accListesi = undefined
        }


    }


accFiltre='Edge'

    handleAccountIsim(event){
this.accFiltre = event.target.value
    }
    
}