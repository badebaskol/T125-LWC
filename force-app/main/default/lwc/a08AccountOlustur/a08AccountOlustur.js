import { LightningElement } from 'lwc';
import accOlustur from '@salesforce/apex/AccountController.AccountOlustur'
	
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class A08AccountOlustur extends LightningElement {

    accName
    accTel

    handleAccountIsim(event){

this.accName = event.target.value
    }

    handleAccountTelefon(event){
this.accTel = event.target.value
    }


    accListesi
    accHata

    handleAccountOlustur(){
 // accountOlustur( string accIsim , string accTel      )
 
        accOlustur({accIsim:this.accName , accTel : this.accTel})
        .then((response) => {
           if (response ==='success'){

            const event = new ShowToastEvent({
                title: 'TEBRIKLER',
                message: 'Account Recordu Olustu',
                variant: 'success',
                mode: 'dismissable'
            });
            this.dispatchEvent(event);

           } else if (response ==='fail' ){
            const event = new ShowToastEvent({
                title: 'UZGUNUZ',
                message: 'Account recordu Olusturulamadi !!!',
                variant: 'error',
                mode: 'dismissable'
            });
            this.dispatchEvent(event);

           }
            
          })
          .catch((err) => {
            console.error('ERRROOR >>> '+   err);
            
          });
          


    }


}