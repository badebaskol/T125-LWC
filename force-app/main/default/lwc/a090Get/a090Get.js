import { LightningElement , api } from 'lwc';

export default class A090Get extends LightningElement {

    sayi1=9
    sayi2=3
    toplam=   this.sayi1+  this.sayi2
    
    
    
    get sayiToplam (){
    
        return this.sayi1+  this.sayi2
    }

    isimler=['ayse','fatma','resul','ali','ertugrul']

    secilenIsim = this.isimler[0]
    
    get secilenIsimGet(){
    
       return this.isimler[1] 
    }

// get calisir
girilenIndex=0
handleIndex(armut){
    this.girilenIndex = parseInt(armut.target.value)
}

 @api  secilenIsimFiltre = this.isimler[this.girilenIndex]

get secilenIsimFiltreGet(){
if( this.girilenIndex > 0 &&  this.girilenIndex < this.isimler.length    ){
    return this.isimler[this.girilenIndex]
}else{
    window.alert('YANLIS RAKAM GIRDINIZ !!')
}

   
}


}