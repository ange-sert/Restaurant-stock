import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './stock/home/home.component';
import { MainComponent } from './stock/main/main.component';
import { RecipeMainComponent } from './recipe/recipe-main/recipe-main.component';
import { RecipeDishComponent } from './recipe/recipe-dish/recipe-dish.component';

import { SuppliersMainComponent } from './suppliers/suppliers-main/suppliers-main.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'main', component: MainComponent, data: {title: 'Main Stock Page'} },
{ path: 'recipe-main', component: RecipeMainComponent, data: {title: 'Recipe Main'} },
{ path: 'recipe-dish/:recipeID', component: RecipeDishComponent, data: {title: 'Recipe Dish'} },


{ path: 'suppliers-main', component: SuppliersMainComponent, data: {title: 'Suppliers Main'} },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
