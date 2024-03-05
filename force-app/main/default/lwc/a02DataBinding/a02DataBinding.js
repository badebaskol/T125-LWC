import { LightningElement } from 'lwc';

export default class A02DataBinding extends LightningElement {

//Tek yonlu Data Binding
isim = 'Mahmut';

kisi = {
    isim : 'Kemal',
    yas : '50',
    oyunlar:['Tavla','okey','satranc']
}

//Cift yonlu Data Binding

ad='Adim buraya yazilacak';

handleChange(event){

    this.ad = event.target.value;
    //gelen bilgiyi alip isleme isini yapar
}


//Data Manipule

ilkIsim='degisecek'

handleIlkIsim(event){

   this.ilkIsim = (event.target.value).toUpperCase()
}

// get yontemi ( get ile set kardesdir birlilte olurlar)


ilkIsimGet='degisecek'

handleIlkIsimGet(event){

   this.ilkIsimGet = event.target.value
}

soyisim =''
handleSoyadGet(e){
  this.soyisim  =      (e.target.value).toUpperCase()

}


container
get getIlkIsim(){

   this.container = this.ilkIsimGet
  
   this.container =this.container.toLowerCase();

   this.container = this.container.charAt(0).toUpperCase() +  this.container.slice(1) + ' ' + this.soyisim


   return this.container
}

}
