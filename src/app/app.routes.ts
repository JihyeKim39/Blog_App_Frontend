import { Routes } from '@angular/router';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ViewAllComponent } from './pages/view-all/view-all.component';

export const routes: Routes = [
  { path: 'create-post', component: CreatePostComponent },
  { path: '', redirectTo: '/view-all', pathMatch: 'full' },
  { path: 'view-all', component: ViewAllComponent },
];
