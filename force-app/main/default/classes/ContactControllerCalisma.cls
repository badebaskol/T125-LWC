public with sharing class ContactControllerCalisma {
    
    @AuraEnabled(cacheable=true)
    public static List <Contact> cntListCall (){


        List<Contact> cntList=[SELECT id, name, phone FROM Contact Limit 5];

        return cntList;
    }

    @AuraEnabled(cacheable=true)
    public static List <Contact> cntListWithFiltre (string cntfiltre){

        string key='%'+cntfiltre+'%';

        List<Contact> cntList=[SELECT id, name, phone 
                                FROM Contact WHERE name LIKE :key 
                                Limit 5];

        return cntList;
    }

}