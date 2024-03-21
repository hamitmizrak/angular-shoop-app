// Routes import
import { Routes } from '@angular/router';

// Page Component
import { BlogMainComponent } from './blog-main/blog-main.component';
import { BlogRegisterComponent } from './blog-register/blog-register.component';
import { BlogCardComponent } from './blog-card/blog-card.component';

// Export
export const routes: Routes = [
  // Index (Home Page: Default)
  { path: 'index', component: BlogMainComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' },

  // Register
  { path: 'register', component: BlogRegisterComponent },
  { path: 'blog', component: BlogCardComponent },
];
