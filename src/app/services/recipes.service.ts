import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Recipes } from 'src/app/models/recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(
  	private firestore: AngularFirestore
  	) { }

  getRecipes() {
    return this.firestore.collection('recipes').snapshotChanges();
  }

  createRecipes(recipes: Recipes) {
    return this.firestore.collection('recipes').add(recipes);
    return this.firestore
		.collection("recipes")
		.add({
			name: recipes.name,
			description: recipes.description,
			image: recipes.image,
			recipes_category: recipes.recipe_category,
		});
  }
}
