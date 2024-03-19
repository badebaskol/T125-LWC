import { LightningElement } from 'lwc';
import fetchAccounts from '@salesforce/apex/AccountController.fetchAccounts'



export default class A14lifecycleParent extends LightningElement {
  name
handleName(event){
    this.name= event.target. value
    console.log('name >> ' + this.name)
}


flag=true

handleGoster(){
this.flag=true
}
handleGizle(){
  this.flag= false
}

    constructor(){
        super()
    
        fetchAccounts()
        .then( (result) => {'constructor >>>> '+console.log( JSON.stringify(result)     )}   )
        .catch(  (error) => {console.log( JSON.stringify(error)     )}     )



     //alert(' PARENT   constructor  calisti ')
    }
 
connectedCallback(){


  fetchAccounts()
  .then( (result) => {console.log('connectedCallback >>>> ' + JSON.stringify(result)     )}   )
  .catch(  (error) => {console.log( JSON.stringify(error)     )}     )

 // alert('PARENT   connectedCallback  calisti ')
 
}


sayi=0


renderedCallback(){
/*
  if ( this.sayi<5){
    this.sayi++
  }
  

  alert('PARENT  renderedCallback  calisti ' + this.sayi)
*/
}


disconnectedCallback(){

 // alert('PARENT  disconnectedCallback  calisti ')


}

hata=true
errorCallback( error, stack    ){
  if(error){
    this.hata=false
  }


/*
if(error){
  console.log('ERROR OLUSTU ' + error)
} 
*/
//console.log('stack ' + stack)

}


}