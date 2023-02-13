import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutModule } from './modules/about/about.module';
import { ContactModule } from './modules/contact/contact.module';
import { HomeModule } from './modules/home/home.module';
import { JoinModule } from './modules/join/join.module';
import { ServicesModule } from './modules/services/services.module';

const routes: Routes = [
  {path: '', loadChildren:()=>HomeModule},
  {path: 'about', loadChildren:()=>AboutModule},
  {path: 'services', loadChildren:()=>ServicesModule},
  {path: 'contact-us', loadChildren:()=>ContactModule},
  {path: 'join', loadChildren:()=>JoinModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
