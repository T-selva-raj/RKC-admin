import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

export const appConfig: ApplicationConfig = {
  providers: [
    MessageService,
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG(
      {
        theme: {
          preset: Lara,
          options: {
            darkModeSelector: false || 'none'
          }
        }
      }
    ),
    importProvidersFrom(ToastModule),
    MessageService
  ]
};