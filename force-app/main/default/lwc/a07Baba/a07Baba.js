import { LightningElement, api } from 'lwc';

export default class A07Baba extends LightningElement {

    chosenKasa='';
    kasaOptions= [ {label : 'Accord' , value:'Accord'},
                    {label : 'Corolla' , value:'Corolla'},
                    {label : 'M5' , value:'M5'},
                    {label : 'S500' , value:'S500'}
                   ]
    
    get kasaTipiOptions(){
    
        return this.kasaOptions
    } 
    
    handleKasaTipi(event){
    
        this.chosenKasa = event.detail.value;
    }

//  toruna gidecek veri

@api torunArabaModeli=''

}