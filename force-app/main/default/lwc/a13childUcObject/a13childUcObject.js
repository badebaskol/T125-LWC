import { LightningElement } from 'lwc';

export default class A13ChildBir extends LightningElement {

    yeniObj={
        isim:'Resul',
        yas:50
    }

    handleClick(){
        

        const cstEvent=new CustomEvent('ayva', {detail : this.yeniObj})
        //kiraz isimle event detail kisminda paket halinde bilgi tasiyor
        this.dispatchEvent(cstEvent)
    }





}