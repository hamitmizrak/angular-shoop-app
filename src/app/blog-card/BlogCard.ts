export class BlogCard {
    // Field
    id:number;
    title:string;
    picture:string;
    description:string;
    date:string;
    link:string;
    categoryName:string;

    // Constructor 
    constructor(id:number, title:string,picture:string, description:string,  date:string,  link:string,  categoryName:string){
        this.id=id;
        this.title=title;
        this.picture=picture;
        this.description=description;
        this.date=date;
        this.link=link;
        this.categoryName=categoryName;
    } //end constructor
} //end class