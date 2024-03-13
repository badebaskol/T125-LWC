import { LightningElement } from 'lwc';

export default class A11eventListenerParent extends LightningElement {

    parentClick =0
    

    handleClickParent(){
        this.parentClick++
    }


    renderedCallback(){
        //LWC lifecycle ile alakali
        this.template.querySelector('c-a11event-listener-child-js')
        .addEventListener('click', this.alarmVer)
        //verilen tagi querySelector ile bul dinle
        //addEventListener ile verilen 'click' duyarsan su methodu calistir.
    }

    alarmVer(){
        alert(' Parent childda DUGMEYE BASILDIGINI dinledi')
    }

}