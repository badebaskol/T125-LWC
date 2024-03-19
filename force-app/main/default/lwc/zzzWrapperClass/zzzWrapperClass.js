import { LightningElement , track } from 'lwc';
import getRelatedRecords from '@salesforce/apex/OrnekWrapperClass.ornekWrapperMethod';


export default class ZzzWrapperClass extends LightningElement {




    @track relatedRecords;
    accountName;

    handleAccountNameChange(event) {
        this.accountName = event.target.value;
    }

contList

    handleGetRelatedRecords() {
        getRelatedRecords({ accountName: this.accountName })
            .then(result => {
                this.relatedRecords = result;
                this.contList = relatedRecords.conList;
                console.log('Related Records:', JSON.stringify(result));
                console.log('Opportunities:', JSON.stringify(result.oppList));
                console.log('Cases:', JSON.stringify(result.caseList));
            })
            .catch(error => {
                console.error('Error: ', error);
            });
    }




}