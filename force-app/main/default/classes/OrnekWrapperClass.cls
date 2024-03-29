public with sharing class OrnekWrapperClass {
   
    @AuraEnabled(cacheable=true)        
    public static accountWrapperClass ornekWrapperMethod(string accountName) {
        String key = '%' + accountName + '%';
        list<Account> accList = [select id, name, (select id, name from contacts LIMIT 1),(select id, name from opportunities LIMIT 1),
                                 (select id, Subject from cases) from Account where name =:key];
        
        accountWrapperClass currentWrapper = new accountWrapperClass();
        currentWrapper.conList = accList[0].contacts;
        currentWrapper.oppList = accList[0].opportunities;
        currentWrapper.caseList = accList[0].cases;
        currentWrapper.index = 1 ;
             System.debug(currentWrapper);
        return currentWrapper;
         
    }
    public class accountWrapperClass{
        @AuraEnabled public list<contact> conList;
        @AuraEnabled public list<opportunity> oppList;
        @AuraEnabled public list<case> caseList;
        @AuraEnabled public integer index;
         
    } 




}