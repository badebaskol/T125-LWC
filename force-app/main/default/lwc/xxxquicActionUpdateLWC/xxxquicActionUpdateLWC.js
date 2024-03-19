import { LightningElement , api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import {CloseActionScreenEvent} from 'lightning/actions'


export default class AaaquicActionUpdateLWC extends LightningElement {
@api recordId
@api objectApiName //recordun turunu (opp,account,case...) tutar
handleSuccess(e){
    this.dispatchEvent( new CloseActionScreenEvent());
    this.dispatchEvent(
        new ShowToastEvent({
            title: 'Success',
            message: 'Record Updated succesfuly',
            variant: 'success'

        })
    )
}

}