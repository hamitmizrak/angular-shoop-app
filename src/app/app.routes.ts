// Routes import
import { Routes } from '@angular/router';

// Page Component
import { BlogMainComponent } from './blog-main/blog-main.component';
import { BlogRegisterComponent } from './blog-register/blog-register.component';

// Export
export const routes: Routes = [
  // Index (Home Page: Default)
  { path: 'index', component: BlogMainComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' },

  // Register
  { path: 'register', component: BlogRegisterComponent },
];
