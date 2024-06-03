public with sharing class AccountController {
    //record level security etkin


    @AuraEnabled(cacheable=true)
   public static list<Account> accountGetir(){
    list<Account> accList= new List<account>();
    
    try {
        
// not  query illa alttaki gibi yapilmak zorunda degil  
// string ile de query yapabiliriz

  accList = [SELECT id, name, phone
                                    FROM Account
                                    WHERE phone != NULL
                                    WITH SECURITY_ENFORCED LIMIT 5];


    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }

return accList;
   }



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



    @AuraEnabled
public static string accountOlustur( string accIsim , string accTel      ){
   
   string sonuc= 'fail';
   
    try {
        
account acc = new Account();
acc.Name= accIsim;
acc.Phone = accTel;
 
if(accIsim != null){
    insert acc;

    if(acc.id !=null){
        sonuc = 'success';
    }
   
 }else {

    sonuc='fail';
 }

    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }

    return sonuc;
}



@AuraEnabled(cacheable=true)
public static list<Account> fetchAccounts(){
 list<Account> accList= new List<account>();
 
 try {
accList = [SELECT id, name, phone
                                 FROM Account
                                 WHERE phone != NULL
                                 WITH SECURITY_ENFORCED LIMIT 5];
 } catch (Exception e) {
     throw new AuraHandledException(e.getMessage());
 }
return accList;
}






}
