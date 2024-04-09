import { LightningElement } from 'lwc';

export default class A03ConditionalRendering extends LightningElement {

sar1 = true

sart2 = false

//Conditional Rendering Flag

flag = true

handleClick(){
this.flag = !this.flag
}


//Parola Sorgula

flag2 = false
inputParola= ''

parola = 'Elma'
handleChange(event){

//inputtan aldigim deger eger gercek parola ile ayni ise ture donsun

this.inputParola = event.target.value

if(this.parola == this.inputParola){

    this.flag2 = true
}else{
    this.flag2 = false
}

}


//Conditional Rendering YENI 

durum1 = false
durum2 = false
durum3 = true





}

/*

if(  sart 1 ){
    bunu yap
} else if( sart 2) {

} else {

}
*/




