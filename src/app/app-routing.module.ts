import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './stock/main/main.component';

const routes: Routes = [
	{ path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent, data: {title: 'Main Stock Page'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
