import { LightningElement, wire } from 'lwc';
import accountListesiniGetir from '@salesforce/apex/AccountContoller.accountGetir'

export default class A08WireDecorator extends LightningElement {


@wire(accountListesiniGetir)accountlar
handleClick(){
    console.log('DATA >>> ' +  JSON.stringify(this.accountlar.data ))

// {"Id":"001Hu0000347CPwIAM","Name":"AAA ## new account","Phone":"34564tr"}
    console.log('HATA>>> '+ this.accountlar.error)
}



accListesi
accHata
@wire(accountListesiniGetir)
accountListesi({data,error}){

    if(data){
    this.accListesi = data
    this.accHata = undefined
    }else if( error){
   this.accHata = error
   this.accListesi = undefined
    }


}







}