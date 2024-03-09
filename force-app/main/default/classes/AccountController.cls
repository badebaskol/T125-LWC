public with sharing class AccountController {
    //record level security etkin


    @AuraEnabled(cacheable=true)
    public static list<Account> AccountFiltrele(string accName){
     list<Account> accList= new List<account>();
    string filtre='%'+accName+'%';
     try {
        accList = [SELECT id, name, phone
                                     FROM Account
                                     WHERE Name LIKE :filtre
                                     WITH SECURITY_ENFORCED LIMIT 5];
     } catch (Exception e) {
         throw new AuraHandledException(e.getMessage());
     }

        return accList;
    }


}