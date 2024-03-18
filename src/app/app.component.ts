import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Component
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { BlogFooterComponent } from './blog-footer/blog-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    BlogHeaderComponent,
    BlogMainComponent,
    BlogFooterComponent],
  // 1.YOL (HTML)
  templateUrl: './app.component.html',

  // 2.YOL (HTML)
  /*
  template:`
  <h1>Merhabalar Sadece Html Yazıyım.</h1>
  `,
  */

  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Angular Kursumuza Hoşgeldiniz';
  projectName:string="Blog Page";
  authorName:string="Hamit";
  authorSurname:string="Mızrak";
}
