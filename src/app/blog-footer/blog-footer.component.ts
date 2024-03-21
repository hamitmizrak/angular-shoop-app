import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-footer',
  standalone: true,
  imports: [],
  templateUrl: './blog-footer.component.html',
  styleUrl: './blog-footer.component.css',
})
export class BlogFooterComponent {
  // Method
  newDateYear(): string {
    return `2015 © - ${String(new Date().getFullYear())} Copyright `;
  }
} //end class BlogFooterComponent
