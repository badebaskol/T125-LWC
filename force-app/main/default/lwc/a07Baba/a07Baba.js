import { LightningElement, api } from 'lwc';

export default class A07Baba extends LightningElement {

    kasaTipi=''

    handleKasaTipi(e){
        this.kasaTipi =e.target.value
    
    }

//  toruna gidecek veri

@api torunArabaModeli=''

}