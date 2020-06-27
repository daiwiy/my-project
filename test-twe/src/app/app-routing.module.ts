import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './component/home/home.component';
import { ContentComponent } from './component/content/content.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,children:[
    {path: 'Content', component: ContentComponent},
    {path: 'Welcome', component: WelcomeComponent}
] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
