import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SocialContent } from './SocialContent';

@Component({
  selector: 'app-blog-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-header.component.html',
  styleUrl: './blog-header.component.css'
})
export class BlogHeaderComponent {
  headerTitle:string="Angular Workshop"
  headerContent:string="Angular, HTML5, CSS3, JavaScript, TypeScript, ECMAScript"
  name:string="Hamit";
  surname:string="Mızrak";
  logo:string="Logo"

  // Social Content
  socialContent:SocialContent[]=[
    { id:1, link:"https://www.linkedin.com/", text:"Linkedin", icon:"fa fa-linkedin",classSocial:"btn btn-primary me-2"},
    { id:1, link:"https://www.blogger.com/", text:"Blogger", icon:"fa fa-linkedin",classSocial:"btn btn-dark me-2"},
    { id:1, link:"https://www.youtube.com/", text:"Youtube", icon:"fa fa-linkedin",classSocial:"btn btn-danger me-2"},
    { id:1, link:"https://github.com/", text:"GitHub", icon:"fa fa-linkedin",classSocial:"btn btn-warning me-2"}
  ];

  // Constructor
  constructor(){}

} //end class SocialContent
