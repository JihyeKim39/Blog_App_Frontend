import { Routes } from '@angular/router';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';

export const routes: Routes = [
  { path: 'create-post', component: CreatePostComponent },
  { path: 'view-all', component: ViewAllComponent },
  { path: 'view-post/:id', component: ViewPostComponent }, //id 와 이름을 언급해야한다.
  { path: '', redirectTo: '/view-all', pathMatch: 'full' },
];
