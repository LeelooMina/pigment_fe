import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PaintsComponent } from './paints/paints.component';
import { PaletteComponent } from './palette/palette.component';
import { PostsComponent } from './posts/posts.component';
import { SignupComponent } from './auth/signup/signup.component';

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
    component: PaletteComponent
  },
  {
    path: 'paints',
    component: PaintsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
