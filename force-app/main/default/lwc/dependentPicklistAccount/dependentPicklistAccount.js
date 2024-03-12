import { LightningElement,track,wire,api } from 'lwc'

import {getObjectInfo} from 'lightning/uiObjectInfoApi';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';

import {getPicklistValues} from 'lightning/uiObjectInfoApi';

import Kitalar from '@salesforce/schema/Account.Kitalar__c';

import Ulkeler from '@salesforce/schema/Account.Ulkeler__c';

export default class DependentPicklistAccount extends LightningElement {

    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT })

    accountInfo;

 

    @track kitaOptions;

    @track ulkeOptions;

    @track ulke;

    @wire(getPicklistValues, {recordTypeId: '$accountInfo.data.defaultRecordTypeId', fieldApiName: Ulkeler })

    countryFieldInfo({ data, error }) {

        if (data){
            this.countryFieldData = data;
            console.log(JSON.stringify(this.countryFieldData))
        } 

    }

    @wire(getPicklistValues, {recordTypeId:'$accountInfo.data.defaultRecordTypeId', fieldApiName: Kitalar })

    continentFieldInfo({ data, error }) {

        if (data){
            this.kitaOptions = data.values;
            console.log(JSON.stringify(this.kitaOptions))
        } 

    }

    handleContinentChange(event) {

        let key = this.countryFieldData.controllerValues[event.target.value];

        this.ulkeOptions = this.countryFieldData.values.filter(opt => opt.validFor.includes(key));
        //filter methodu arastir!
    }

    handleCountryChange(event)

    {

        var ulke =event.target.value;

    }

}