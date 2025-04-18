import { importProvidersFrom } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export const materialProviders = importProvidersFrom(
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
);
