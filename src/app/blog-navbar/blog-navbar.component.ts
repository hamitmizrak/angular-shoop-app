// import
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Special Component
import { User, userRolles } from './User';

// Component
@Component({
  // Selector
  selector: 'app-blog-navbar',

  // Bu component tek başına çalışabilsin
  standalone: true,

  // import
  imports: [CommonModule, RouterLink],

  // Html Template
  templateUrl: './blog-navbar.component.html',

  // Css Template
  styleUrl: './blog-navbar.component.css',
})

// CLASS
export class BlogNavbarComponent {
  // Field (Data Types)
  // User:Array<any>;  ==> Dizi Ekleme
  // User:any[]=[];  ==> Dizi Ekleme
  // User:User[]=[]; ==> Dizi Ekleme
  User: User[] = [
    // id, _username, email, password, pictures, date, link, rolles
    {
      id: 1,
      username: 'Hamit',
      email: 'hamitmizrak@gmail.com',
      password: '123456',
      pictures: 'admin1.png',
      date: String(new Date().getFullYear()),
      link: 'https://admin1/',
      rolles: userRolles.admin,
    },
    {
      id: 2,
      username: 'writer1',
      email: 'writer1@gmail.com',
      password: '123456',
      pictures: 'writer.png',
      date: String(new Date().getFullYear()),
      link: 'https://writer1/',
      rolles: userRolles.writer,
    },
    {
      id: 3,
      username: 'user1',
      email: 'user1@gmail.com',
      password: '123456',
      pictures: 'user1.png',
      date: String(new Date().getFullYear()),
      link: 'https://user1/',
      rolles: userRolles.user,
    },
  ];

  // navbar
  // navBar:{}={}; ==> Object Ekleme
  navBar: {
    // Authentication
    isLogin: boolean;

    // Logo
    logo: {
      logoName: string;
      logoFontAwesome: string;
      logoPicture: String;
      logoLink: string;
      logoTitle: string;
    };

    // Navbar Link
    navbarLink: Array<any>;

    // Search
    search: {
      name: String;
      placeholder: string;
      type: string;
      button_style: string;
    };
  } = {
    // Authentication
    isLogin: false,

    // Logo
    logo: {
      logoName: 'Logo',
      logoFontAwesome: 'fa-solid fa-earth-americas',
      logoPicture: 'admin.png',
      logoLink: '/',
      logoTitle: 'Admin Title',
    },

    // Navbar
    navbarLink: [
      {
        id: 1,
        name: 'anasayfa',
        link: '/index',
        fontAwesome: 'fa-solid fa-house-chimney',
      },
      {
        id: 2,
        name: 'my work',
        link: '#business_id',
        fontAwesome: 'fa-solid fa-user-tie',
      },
      {
        id: 3,
        name: 'blog',
        link: '#blog_id',
        fontAwesome: 'fa-solid fa-square-rss',
      },
      {
        id: 4,
        name: 'about',
        link: '#about_id',
        fontAwesome: 'fa-regular fa-address-card',
      },
      {
        id: 5,
        name: 'Contact',
        link: '#contact_id',
        fontAwesome: 'fa-solid fa-map-location-dot',
      },
    ],

    search: {
      name: 'Ara',
      placeholder: 'Arama için',
      type: 'text',
      button_style: 'btn btn-outline-success my-2 my-sm-0',
    },
  };

  // Constructor (Parametreli)
  constructor() {}
  // Method
  darkMode() {
    alert('Dark Mode');
  }
} //end BlogNavbarComponent
