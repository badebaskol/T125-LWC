import { LightningElement , wire} from 'lwc';
import accFiltrele from '@salesforce/apex/AccountController.AccountFiltrele'


export default class A08Imperative extends LightningElement {

  /*
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
*/

accFiltre='Edge'

    handleAccountIsim(event){
this.accFiltre = event.target.value
    }

    accListesi
    accHata
    handleClick(){
        accFiltrele({accName:this.accFiltre})
        .then((result) => {
            console.log( JSON.stringify(result)  );
            this.accListesi = result;
            this.accHata= undefined
          })
          .catch((err) => {
            console.error(err);
            this.accHata = err
            this.accListesi=undefined
          })
          .finally(() => {
            console.log('FINALLY Experiment completed');
          });


    }


}