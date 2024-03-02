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



}