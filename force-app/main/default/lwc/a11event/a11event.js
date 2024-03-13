import { LightningElement } from 'lwc';

export default class A10event extends LightningElement {

    xKoordinati = 0
    yKoordinati = 0

  
    handleMouseMove(ev){
        this.xKoordinati=ev.clientX
        this.yKoordinati=ev.pageY
    }



}