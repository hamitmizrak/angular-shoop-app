// ENUM
export enum userRolles {
  admin = 'ADMIN',
  writer = 'WRITER',
  user = 'USER',
} //end enum userRolles

// ABSTRACT
abstract class Person {
  // Field (Data Types)
  id: number;
  username: string;
  email: string;
  password: string;
  pictures: string;
  date: string;
  link: string;

  // Constructor (Parametreli)
  constructor(
    id: number,
    username: string,
    email: string,
    password: string,
    pictures: string,
    date: string,
    link: string
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.pictures = pictures;
    this.date = date;
    this.link = link;
  }


} //end abstract Person

// CLASS
export class User extends Person {
  // Field (Data Types)
  rolles: string;

  // Constructor (Parametreli)
  constructor(
    id: number,
    username: string,
    email: string,
    password: string,
    pictures: string,
    date: string,
    link: string,
    rolles: string
  ) {
    //abstract'ten gelen
    super(id, username, email, password, pictures, date, link);
    this.rolles = rolles;
  }

  // Method
}

// INTERFACE
