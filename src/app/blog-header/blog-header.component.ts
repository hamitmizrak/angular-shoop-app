import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-header',
  standalone: true,
  imports: [],
  templateUrl: './blog-header.component.html',
  styleUrl: './blog-header.component.css'
})
export class BlogHeaderComponent {
  name:string="Hamit";
  surname:string="Mızrak";
}
