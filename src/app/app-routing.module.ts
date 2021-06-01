import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './stock/main/main.component';
import { RecipeMainComponent } from './recipe/recipe-main/recipe-main.component';
import { RecipeDishComponent } from './recipe/recipe-dish/recipe-dish.component';

const routes: Routes = [
{ path: '', redirectTo: '/main', pathMatch: 'full' },
{ path: 'main', component: MainComponent, data: {title: 'Main Stock Page'} },
{ path: 'recipe-main', component: RecipeMainComponent, data: {title: 'Recipe Main'} },
{ path: 'recipe-dish/:recipeID', component: RecipeDishComponent, data: {title: 'Recipe Dish'} },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
