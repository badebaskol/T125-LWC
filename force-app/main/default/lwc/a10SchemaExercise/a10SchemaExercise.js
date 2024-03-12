import { LightningElement, api , wire} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

//  current userin bilgilerini aliriz
import userId from "@salesforce/user/Id";
import USER_NAME from "@salesforce/schema/User.Name";
import USER_EMAIL from "@salesforce/schema/User.Email";

// ekranda bulunan recordun filedlari

import ACCOUNT_NAME from "@salesforce/schema/Account.Name";
import ACC_OWNER_NAME from "@salesforce/schema/Account.Owner.Name";


export default class A10SchemaExercise extends LightningElement {
    @api recordId

anlikKullaniciId = userId


kullaniciIsim
kullaniciEmail
//@wire(getRecord, {recordId:'$anlikKullaniciId',fields:[USER_NAME,USER_EMAIL]})
@wire(getRecord, {recordId:'$anlikKullaniciId',fields:["User.Name",'User.Email']})
kullaniciBilgi({data, error}){
if(data){
//console.log('DATA>> ' +  JSON.stringify(data))
this.kullaniciIsim = data.fields.Name.value;
this.kullaniciEmail = data.fields.Email.value ;
/*
DATA>> {
         "apiName":"User","childRelationships":{},
          "fields":{
                "Email":{"displayValue":null,"value":"russellhigh01@gmail.com"},
                "Name":{"displayValue":null,"value":"Russell Yurman"}},
         "id":"005Hu00000PLedyIAD",
         "lastModifiedById":"005Hu00000PLedyIAD",
         "lastModifiedDate":"2024-03-12T17:46:40.000Z",
         "recordTypeId":null,
         "recordTypeInfo":null,
         "systemModstamp":"2024-03-12T17:46:40.000Z"}

*/
}else if (error){

    console.log('Error>> ' +  JSON.stringify(error))

}




}

//  ekrandaki objenin herseyi

@wire(getObjectInfo, { objectApiName: 'Account' })
    objectInfo({data,error}){
if(data){

//console.log("DATA>>>> "+JSON.stringify(data))


}else if(error){

}



    };
   
   /* get fields() {
        if (this.objectInfo.data) {
            return Object.values(this.objectInfo.data.fields);
        }
        return [];
    }*/


    // ekranda gorunen recordun field ve owner i

    accAdi
    accOwner
    accOwner2

    @wire(getRecord, {recordId:'$recordId',fields:[ACCOUNT_NAME,ACC_OWNER_NAME]})
    recordBilgi({data, error}){
  if(data){
    console.log("ACCOUN DATA >> " +JSON.stringify(data))
 this.accAdi = data.fields.Name.value;
 this.accOwner= data.fields.Owner.displayValue
 this.accOwner2 = data.fields.Owner.value.fields.Name.value

/*
ACCOUN DATA >> {
    "apiName":"Account",
    "childRelationships":{},
    "fields":{
        "Name":{"displayValue":null,"value":"AAA LCS yeni record INSERTED"},
        "Owner":{
            "displayValue":"Russell Yurman",
            "value":{
                "apiName":"User",
                "childRelationships":{},
                "fields":{
                    "Name":{
                        "displayValue":null,
                        "value":"Russell Yurman"}},
    "id":"005Hu00000PLedyIAD",
    "lastModifiedById":"005Hu00000PLedyIAD",
    "lastModifiedDate":"2024-03-12T17:46:40.000Z",
    "recordTypeId":null,
    "recordTypeInfo":null,
    "systemModstamp":"2024-03-12T17:46:40.000Z"}}},
    "id":"001Hu00003AKgUYIA1",
    "lastModifiedById":"005Hu00000PLedyIAD",
    "lastModifiedDate":"2024-03-11T18:57:43.000Z",
    "recordTypeId":"012000000000000AAA",
    "recordTypeInfo":null,
"systemModstamp":"2024-03-11T18:57:43.000Z"}


*/
  }else if (error){
    console.log('ERROR VAR')
  }
    }






}


/*
/*
{"apiName":"Account",
"associateEntityType":null,
"associateParentEntity":null,
"childRelationships":[
    {"childObjectApiName":"Account",        "fieldName":"ParentId",        "junctionIdListNames":[],        "junctionReferenceTo":[],        "relationshipName":"ChildAccounts"},
    {"childObjectApiName":"AccountCleanInfo",        "fieldName":"AccountId",        "junctionIdListNames":[],        "junctionReferenceTo":[],        "relationshipName":"AccountCleanInfos"},
    {"childObjectApiName":"AccountContactRole",    "fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],    "relationshipName":"AccountContactRoles"},
    {"childObjectApiName":"AccountFeed",    "fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Feeds"},
    {"childObjectApiName":"AccountHistory","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Histories"},
    {"childObjectApiName":"AccountPartner","fieldName":"AccountFromId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"AccountPartnersFrom"},
    {"childObjectApiName":"AccountPartner","fieldName":"AccountToId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"AccountPartnersTo"},
    {"childObjectApiName":"AccountShare","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Shares"},
    {"childObjectApiName":"ActivityHistory","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ActivityHistories"},
    {"childObjectApiName":"AlternativePaymentMethod","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"AlternativePaymentMethods"},
    {"childObjectApiName":"Asset","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Assets"},
    {"childObjectApiName":"Asset","fieldName":"AssetProvidedById","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ProvidedAssets"},
    {"childObjectApiName":"Asset","fieldName":"AssetServicedById","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ServicedAssets"},
    {"childObjectApiName":"AssociatedLocation","fieldName":"ParentRecordId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"AssociatedLocations"},
    {"childObjectApiName":"AttachedContentDocument","fieldName":"LinkedEntityId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"AttachedContentDocuments"},
    {"childObjectApiName":"Attachment","fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Attachments"},
    {"childObjectApiName":"AuthorizationFormConsent","fieldName":"ConsentGiverId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"AuthorizationFormConsents"},
    {"childObjectApiName":"AuthorizationFormConsent","fieldName":"RelatedRecordId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"RelatedAuthorizationFormConsents"},
    {"childObjectApiName":"CardPaymentMethod","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"CardPaymentMethods"},
    {"childObjectApiName":"Case","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Cases"},
    {"childObjectApiName":"CleanInfo","fieldName":"TargetEntityId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"CleanInfos"},
    {"childObjectApiName":"CollaborationGroupRecord","fieldName":"RecordId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"RecordAssociatedGroups"},
    {"childObjectApiName":"CombinedAttachment","fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"CombinedAttachments"},
    {"childObjectApiName":"CommSubscriptionConsent","fieldName":"ConsentGiverId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"CommSubscriptionConsents"},
    {"childObjectApiName":"Contact","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Contacts"},
    {"childObjectApiName":"ContactPointAddress","fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ContactPointAddresses"},
    {"childObjectApiName":"ContactPointEmail","fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ContactPointEmails"},
    {"childObjectApiName":"ContactPointPhone","fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ContactPointPhones"},
    {"childObjectApiName":"ContactRequest","fieldName":"WhatId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ContactRequests"},
    {"childObjectApiName":"ContentDocumentLink","fieldName":"LinkedEntityId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ContentDocumentLinks"},
    {"childObjectApiName":"Contract","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Contracts"},
    {"childObjectApiName":"CreditMemo","fieldName":"BillingAccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"CreditMemos"},
    {"childObjectApiName":"DigitalWallet","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"DigitalWallets"},
    {"childObjectApiName":"DuplicateRecordItem","fieldName":"RecordId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"DuplicateRecordItems"},
    {"childObjectApiName":"EmailMessage","fieldName":"RelatedToId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Emails"},
    {"childObjectApiName":"Entitlement","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Entitlements"},
    {"childObjectApiName":"EntitySubscription","fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"FeedSubscriptionsForEntity"},
    {"childObjectApiName":"Event","fieldName":"WhatId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Events"},
    {"childObjectApiName":"FinanceBalanceSnapshot","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"FinanceBalanceSnapshots"},
    {"childObjectApiName":"FinanceTransaction","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"FinanceTransactions"},
    {"childObjectApiName":"FlowOrchestrationWorkItem","fieldName":"RelatedRecordId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"FlowOrchestrationWorkItems"},
    {"childObjectApiName":"Invoice","fieldName":"BillingAccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Invoices"},
    {"childObjectApiName":"MessagingEndUser","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"MessagingEndUsers"},
    {"childObjectApiName":"MessagingSession","fieldName":"EndUserAccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"MessagingSessions"},
    {"childObjectApiName":"Note","fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Notes"},
    {"childObjectApiName":"NoteAndAttachment","fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"NotesAndAttachments"},
    {"childObjectApiName":"OpenActivity","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"OpenActivities"},
    {"childObjectApiName":"Opportunity","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Opportunities"},
    {"childObjectApiName":"OpportunityPartner","fieldName":"AccountToId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"OpportunityPartnersTo"},
    {"childObjectApiName":"Order","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Orders"},
    {"childObjectApiName":"Partner","fieldName":"AccountFromId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"PartnersFrom"},
    {"childObjectApiName":"Partner","fieldName":"AccountToId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"PartnersTo"},
    {"childObjectApiName":"Payment","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Payments"},
    {"childObjectApiName":"PaymentAuthAdjustment","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"PaymentAuthAdjustments"},
    {"childObjectApiName":"PaymentAuthorization","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"PaymentAuthorizations"},
    {"childObjectApiName":"PaymentLineInvoice","fieldName":"AssociatedAccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"PaymentLinesInvoice"},
    {"childObjectApiName":"PendingOrderSummary","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"PendingOrderSummaries"},
    {"childObjectApiName":"ProcessInstance","fieldName":"TargetObjectId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ProcessInstances"},
    {"childObjectApiName":"ProcessInstanceHistory","fieldName":"TargetObjectId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ProcessSteps"},
    {"childObjectApiName":"RecordAction","fieldName":"RecordId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"RecordActions"},
    {"childObjectApiName":"RecordActionHistory","fieldName":"ParentRecordId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"RecordActionHistories"},
    {"childObjectApiName":"Refund","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Refunds"},
    {"childObjectApiName":"RefundLinePayment","fieldName":"AssociatedAccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"RefundLinePayments"},{"childObjectApiName":"ResourcePreference","fieldName":"RelatedRecordId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ResourcePreferences"},
    {"childObjectApiName":"ReturnOrder","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ReturnOrders"},{"childObjectApiName":"ScorecardAssociation","fieldName":"TargetEntityId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ScorecardAssociations"},
    {"childObjectApiName":"ServiceAppointment","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ServiceAppointmentAccount"},
    {"childObjectApiName":"ServiceAppointment","fieldName":"ParentRecordId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ServiceAppointments"},
    {"childObjectApiName":"ServiceContract","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ServiceContracts"},{"childObjectApiName":"ServiceResource","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ServiceResources"},
    {"childObjectApiName":"Task","fieldName":"WhatId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Tasks"},
    {"childObjectApiName":"TopicAssignment","fieldName":"EntityId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"TopicAssignments"},
    {"childObjectApiName":"User","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Users"},
    {"childObjectApiName":"VoiceCall","fieldName":"RelatedRecordId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"RelatedRecords"},
    {"childObjectApiName":"WaitlistParticipant","fieldName":"ParticipantId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"WaitlistParticipants"},
    {"childObjectApiName":"WebCart","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Carts"},
    {"childObjectApiName":"WorkOrder","fieldName":"AccountId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"WorkOrders"}]
    
    ,

    "createable":true,"custom":false,
    "defaultRecordTypeId":"012000000000000AAA","deletable":true,"dependentFields":{},"feedEnabled":true,
    
    "fields":{
                "AccountNumber":{"apiName":"AccountNumber","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Account Number","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "AccountSource":{"apiName":"AccountSource","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null, "label":"Account Source","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "Active__c":{"apiName":"Active__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":true,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Active","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "AnnualRevenue":{"apiName":"AnnualRevenue","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false, "dataType":"Currency","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Annual Revenue","length":0,"nameField":false,"polymorphicForeignKey":false, "precision":18,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "BillingAddress":{"apiName":"BillingAddress","calculated":false,"compound":true,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":false,"custom":false,"dataType":"Address","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Billing Address","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":false},
                "BillingCity":{"apiName":"BillingCity","calculated":false,"compound":false,"compoundComponentName":"City","compoundFieldName":"BillingAddress","controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Billing City","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "BillingCountry":{"apiName":"BillingCountry","calculated":false,"compound":false,"compoundComponentName":"Country","compoundFieldName":"BillingAddress","controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Billing Country","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "BillingGeocodeAccuracy":{"apiName":"BillingGeocodeAccuracy","calculated":false,"compound":false,"compoundComponentName":"GeocodeAccuracy","compoundFieldName":"BillingAddress","controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Billing Geocode Accuracy","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "BillingLatitude":{"apiName":"BillingLatitude","calculated":false,"compound":false,"compoundComponentName":"Latitude","compoundFieldName":"BillingAddress","controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"Double","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Billing Latitude","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":18,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":15,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "BillingLongitude":{"apiName":"BillingLongitude","calculated":false,"compound":false,"compoundComponentName":"Longitude","compoundFieldName":"BillingAddress","controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"Double","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Billing Longitude","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":18,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":15,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "BillingPostalCode":{"apiName":"BillingPostalCode","calculated":false,"compound":false,"compoundComponentName":"PostalCode","compoundFieldName":"BillingAddress","controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Billing Zip/Postal Code","length":20,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true}
                "BillingState":{"apiName":"BillingState","calculated":false,"compound":false,"compoundComponentName":"State","compoundFieldName":"BillingAddress","controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null            "label":"Billing State/Province","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "BillingStreet":{"apiName":"BillingStreet","calculated":false,"compound":false,"compoundComponentName":"Street","compoundFieldName":"BillingAddress","controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"TextArea","extraTypeInfo":"PlainTextArea","filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Billing Street","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "CleanStatus":{"apiName":"CleanStatus","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Clean Status","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "CloneSourceId":{"apiName":"CloneSourceId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":false,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Clone Source","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},
                "CreatedById":{"apiName":"CreatedById","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":false,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Created By ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,
                "referenceToInfos":[{"apiName":"User","nameFields":["FirstName","LastName","Name"]}],"relationshipName":"CreatedBy","required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},
                "CreatedDate":{"apiName":"CreatedDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Created Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},
                "CustomerPriority__c":{"apiName":"CustomerPriority__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":true,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Customer Priority","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "DandbCompanyId":{"apiName":"DandbCompanyId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"D&B Company ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,
                "referenceToInfos":[{"apiName":"DandBCompany","nameFields":["Name"]}],"relationshipName":"DandbCompany","required":false,"scale":0,"searchPrefilterable":true,"sortable":true,"unique":false,"updateable":true},
                "Description":{"apiName":"Description","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"TextArea","extraTypeInfo":"PlainTextArea","filterable":false,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Account Description","length":32000,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},
                "DunsNumber":{"apiName":"DunsNumber","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"D-U-N-S Number","length":9,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "Fax":{"apiName":"Fax","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"Phone","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Account Fax","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "Id":{"apiName":"Id","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":false,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Account ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},
                "Industry":{"apiName":"Industry","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Industry","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "IsDeleted":{"apiName":"IsDeleted","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":false,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Deleted","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},
                "Jigsaw":{"apiName":"Jigsaw","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Data.com Key","length":20,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "JigsawCompanyId":{"apiName":"JigsawCompanyId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":false,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Jigsaw Company ID","length":20,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":"JigsawCompany","required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},
                "LastActivityDate":{"apiName":"LastActivityDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":false,"custom":false,"dataType":"Date","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Last Activity","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},
                "LastModifiedById":{"apiName":"LastModifiedById","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":false,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Last Modified By ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,
                "referenceToInfos":[{"apiName":"User","nameFields":["FirstName","LastName","Name"]}],"relationshipName":"LastModifiedBy","required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},
                "LastModifiedDate":{"apiName":"LastModifiedDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Last Modified Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},
                LastReferencedDate":{"apiName":"LastReferencedDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Last Referenced Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},
                "LastViewedDate":{"apiName":"LastViewedDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Last Viewed Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},
                "MasterRecordId":{"apiName":"MasterRecordId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":false,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Master Record ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,
                "referenceToInfos":[{"apiName":"Account","nameFields":["Name"]}],"relationshipName":"MasterRecord","required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},
                "NaicsCode":{"apiName":"NaicsCode","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"NAICS Code","length":8,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "NaicsDesc":{"apiName":"NaicsDesc","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"NAICS Description","length":120,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "Name":{"apiName":"Name","calculated":false,"compound":true,"compoundComponentName":null,"compoundFieldName":"Name","controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"String","extraTypeInfo":"SwitchablePersonName","filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Account Name","length":255,"nameField":true,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "NumberOfEmployees":{"apiName":"NumberOfEmployees","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"Int","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Employees","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "Number_Of_Contacts__c":{"apiName":"Number_Of_Contacts__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":true,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Number Of Contacts","length":3,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "NumberofLocations__c":{"apiName":"NumberofLocations__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":true,"dataType":"Double","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null
                ,"label":"Number of Locations","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":3,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "Old_Phones__c":{"apiName":"Old_Phones__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":true,"dataType":"TextArea","extraTypeInfo":"PlainTextArea","filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Old Phones","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "OperatingHoursId":{"apiName":"OperatingHoursId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Operating Hour ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,
                "referenceToInfos":[{"apiName":"OperatingHours","nameFields":["Name"]}],"relationshipName":"OperatingHours","required":false,"scale":0,"searchPrefilterable":true,"sortable":true,"unique":false,"updateable":true},
                "OwnerId":{"apiName":"OwnerId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Owner ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,
                "referenceToInfos":[{"apiName":"User","nameFields":["FirstName","LastName","Name"]}],"relationshipName":"Owner","required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "Ownership":{"apiName":"Ownership","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Ownership","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "ParentId":{"apiName":"ParentId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Parent Account ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,
                "referenceToInfos":[{"apiName":"Account","nameFields":["Name"]}],"relationshipName":"Parent","required":false,"scale":0,"searchPrefilterable":true,"sortable":true,"unique":false,"updateable":true},
                "Phone":{"apiName":"Phone","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"Phone","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Account Phone","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "PhotoUrl":{"apiName":"PhotoUrl","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":false,"custom":false,"dataType":"Url","extraTypeInfo":"ImageUrl","filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Photo URL","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},
                "Rating":{"apiName":"Rating","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Account Rating","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "SATIS_TEMSILCISI__c":{"apiName":"SATIS_TEMSILCISI__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":true,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"SATIS TEMSILCISI","length":50,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "SLAExpirationDate__c":{"apiName":"SLAExpirationDate__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":true,"dataType":"Date","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"SLA Expiration Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "SLASerialNumber__c":{"apiName":"SLASerialNumber__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":true,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"SLA Serial Number","length":10,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "SLA__c":{"apiName":"SLA__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":true,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"SLA","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                ShippingAddress":{"apiName":"ShippingAddress","calculated":false,"compound":true,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":false,"custom":false,"dataType":"Address","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Shipping Address","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":false},
                "ShippingCity":{"apiName":"ShippingCity","calculated":false,"compound":false,"compoundComponentName":"City","compoundFieldName":"ShippingAddress","controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Shipping City","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "ShippingCountry":{"apiName":"ShippingCountry","calculated":false,"compound":false,"compoundComponentName":"Country","compoundFieldName":"ShippingAddress","controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Shipping Country","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "ShippingGeocodeAccuracy":{"apiName":"ShippingGeocodeAccuracy","calculated":false,"compound":false,"compoundComponentName":"GeocodeAccuracy","compoundFieldName":"ShippingAddress","controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Shipping Geocode Accuracy","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "ShippingLatitude":{"apiName":"ShippingLatitude","calculated":false,"compound":false,"compoundComponentName":"Latitude","compoundFieldName":"ShippingAddress","controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"Double","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Shipping Latitude","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":18,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":15,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "ShippingLongitude":{"apiName":"ShippingLongitude","calculated":false,"compound":false,"compoundComponentName":"Longitude","compoundFieldName":"ShippingAddress","controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"Double","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Shipping Longitude","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":18,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":15,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "ShippingPostalCode":{"apiName":"ShippingPostalCode","calculated":false,"compound":false,"compoundComponentName":"PostalCode","compoundFieldName":"ShippingAddress","controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Shipping Zip/Postal Code","length":20,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "ShippingState":{"apiName":"ShippingState","calculated":false,"compound":false,"compoundComponentName":"State","compoundFieldName":"ShippingAddress","controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Shipping State/Province","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "ShippingStreet":{"apiName":"ShippingStreet","calculated":false,"compound":false,"compoundComponentName":"Street","compoundFieldName":"ShippingAddress","controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"TextArea","extraTypeInfo":"PlainTextArea","filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Shipping Street","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "Sic":{"apiName":"Sic","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"SIC Code","length":20,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "SicDesc":{"apiName":"SicDesc","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"SIC Description","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "Site":{"apiName":"Site","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Account Site","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "SystemModstamp":{"apiName":"SystemModstamp","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"System Modstamp","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},
                "TickerSymbol":{"apiName":"TickerSymbol","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Ticker Symbol","length":20,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "Tradestyle":{"apiName":"Tradestyle","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Tradestyle","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "Type":{"apiName":"Type","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Account Type","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "UpsellOpportunity__c":{"apiName":"UpsellOpportunity__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":true,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Upsell Opportunity","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "Website":{"apiName":"Website","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"Url","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Website","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},
                "YearStarted":{"apiName":"YearStarted","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"controllingFields":[],"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,
                "label":"Year Started","length":4,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,
                "searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true}},"keyPrefix":"001",
                "label":"Account","labelPlural":"Accounts","layoutable":true,"mruEnabled":true,"nameFields":["Name"],"queryable":true,"recordTypeInfos":{"012000000000000AAA":{"available":true,"defaultRecordTypeMapping":true,"master":true,"name":"Master","recordTypeId":"012000000000000AAA"}},"searchable":true,
                "themeInfo":{"color":"5867E8","iconUrl":"https://team111dev-dev-ed.develop.my.salesforce.com/img/icon/t4v35/standard/account_120.png"},"updateable":true}

            */


            

