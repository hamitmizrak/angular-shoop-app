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
    return `Copyright © 2015 - ${String(new Date().getFullYear())}`;
  }
} //end class BlogFooterComponent
