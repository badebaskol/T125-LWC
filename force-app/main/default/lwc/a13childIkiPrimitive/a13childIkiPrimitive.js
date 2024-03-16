import { LightningElement } from 'lwc';

export default class A13ChildBir extends LightningElement {

    yeniBilgi='Bu Bilgi Childda'

    handleClick(){
        

        const cstEvent=new CustomEvent('kiraz', {detail : this.yeniBilgi})
        //kiraz isimle event detail kisminda paket halinde bilgi tasiyor
        this.dispatchEvent(cstEvent)
    }





}