import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { BlogFooterComponent } from './blog-footer/blog-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,BlogHeaderComponent,BlogMainComponent,BlogFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Angular Kursumuza Hoşgeldiniz';
}
