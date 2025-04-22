import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // ✅ appConfig 불러오기!

bootstrapApplication(AppComponent, appConfig); // ✅ 이걸로 설정 반영!
