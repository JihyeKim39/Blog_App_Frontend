// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';  // ✅ 이거 하나면 OK!
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { materialProviders } from './angular-material.providers.ts';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),        // ✅ HttpClient 주입이 여기서 됨!
    provideRouter(routes),
    provideAnimations(),
    materialProviders,
  ],
};
