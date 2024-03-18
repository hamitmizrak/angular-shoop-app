// ENUM
export enum userRolles{
    admin='ADMIN', 
    writer="WRITER",
    user='USER',
}

// ABSTRACT
abstract class Person {
    // Field (Data Types)
    id:number;
    username:string;
    email:string;
    password:string;
    //rolles:userRolles;
    pictures:string;
    date:string;
    link:string;

    // Constructor (Parametreli)
    constructor(id:number,_username:string, email:string, password:string,pictures:string,date:string,link:string){
    this.id=id;
    this.username=_username;
    this.email=email;
    this.password=password;
    this.pictures=pictures;
    this.date=date;
    this.link=link;
    }

    // Method
    personInformation(){
        //console.log("Personel Bilgileri: "+this.username+" "+this.email+" "+this.password+" "+this.pictures+" "+this.date+" "+this.link);
        console.log(`Personel Bilgileri: 
        ${this.id}  
        ${this.username}  
        ${this.email}  
        ${this.password}  
        ${this.pictures}
        ${this.date}
        ${this.link}
        `);
        } //end personInformation
    } //end Person

// CLASS
