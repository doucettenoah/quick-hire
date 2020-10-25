import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './views/about/about.component';
import { SignUpComponent } from './views/signin/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signup', component: SignUpComponent },
  // { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] },
  // all these routes will be loaded lazily
  // { path: 'auth', loadChildren: './auth/auth.module#AuthModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
