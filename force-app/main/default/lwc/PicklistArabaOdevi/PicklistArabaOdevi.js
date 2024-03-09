import { track, LightningElement } from 'lwc';

export default class A08PicklistArabaOdevi extends LightningElement {


    chosenAraba='';
arabaOptions= [ {label : 'Honda' , value:'Accord'},
                {label : 'Toyota' , value:'Corolla'},
                {label : 'BMW' , value:'M5'},
                {label : 'Mercedes' , value:'S500'}
               ]

get arabaOptions(){

    return this.arabaOptions
} 

handlePicklist(event){

    this.chosenAraba = event.detail.value;
}


chosenKasa='';
kasaOptions= [ {label : 'Accord' , value:'Sedan'},
                {label : 'Corolla' , value:'SUV'},
                {label : 'M5' , value:'Sport'},
                {label : 'S500' , value:'Hatchback'}
               ]

get kasaTipiOptions(){

    return this.kasaOptions
} 

handlePicklist1(event){

    this.chosenKasa = event.detail.value;
}



}