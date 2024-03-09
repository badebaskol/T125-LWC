import { LightningElement } from 'lwc';

export default class A07BuyuBaba extends LightningElement {

    chosenAraba='';
    arabaOptions= [ {label : 'Honda' , value:'Honda'},
                    {label : 'Toyota' , value:'Toyota'},
                    {label : 'BMW' , value:'BMW'},
                    {label : 'Mercedes' , value:'Mercedes'}
                   ]
    
    get arabaOptions(){
    
        return this.arabaOptions
    } 
    
    handlePicklist(event){
    
        this.chosenAraba = event.detail.value;
    }
    

}