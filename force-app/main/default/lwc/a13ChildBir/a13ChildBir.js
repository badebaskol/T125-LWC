import { LightningElement } from 'lwc';

export default class A13ChildBir extends LightningElement {

    yeniBilgi=''

    handleClick(){
        this.yeniBilgi='BU BILGI YENI GELDI'

        const cstEvent=new CustomEvent('elma')
        this.dispatchEvent(cstEvent)
    }





}