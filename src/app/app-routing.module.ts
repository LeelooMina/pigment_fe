import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PaintsComponent } from './paints/paints.component';
import { PaletteComponent } from './palette/palette.component';
import { PostComponent } from './posts/post/post.component';
import { PostsComponent } from './posts/posts.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PigmentsComponent } from './pigments/pigments.component';
import { NewPaletteComponent } from './palette/new-palette/new-palette.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'palette',
    component: PaletteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'paints',
    component: PaintsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'posts',
    component: PostsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'post',
    component: PostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pigments',
    component: PigmentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'new-palette',
    component: NewPaletteComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
