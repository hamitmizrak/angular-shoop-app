export class SocialContent {
    // Field
    id:number;
    link:string;
    text:string;
    icon:string;
    classSocial:string;

    // Constructor 
    constructor(id:number, link:string, text:string, icon:string,  classSocial:string){
        this.id=id;
        this.link=link;
        this.text=text;
        this.icon=icon;
        this.classSocial=classSocial;
    } //end constructor
} //end class