import { LightningElement } from 'lwc';
import fetchAccounts from '@salesforce/apex/AccountController.fetchAccounts'



export default class A14lifecycleParent extends LightningElement {
name
handleName(event){
    this.name= event.target. value
    console.log('name >> ' + this.name)
}


    constructor(){
        super()
        
        fetchAccounts()
        .then((result)=> {console.log('Constructor>>> ' + JSON.stringify(result))})
        .catch( )

    }
 

connectedCallback(){
 
    fetchAccounts()
    .then((result)=> {console.log('Constructor>>> ' + JSON.stringify(result))})
    .catch( (error)=> {console.log('Constructor>>> ' + JSON.stringify(error))})

}



renderedCallback(){
   

}


disconnectedCallback(){


}

}