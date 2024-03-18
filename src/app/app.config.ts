import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// App Config
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
