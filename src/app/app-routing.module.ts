import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) }, 
  { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) }, 
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
