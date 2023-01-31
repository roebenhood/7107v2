import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutModule } from './modules/about/about.module';
import { HomeModule } from './modules/home/home.module';

const routes: Routes = [
  {path: '', loadChildren:()=>HomeModule},
  {path: 'about', loadChildren:()=>AboutModule},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
