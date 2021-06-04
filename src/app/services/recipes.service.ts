import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Recipes } from 'src/app/models/recipes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {

  recipeDetails!: Observable<any>;

  constructor(private db: AngularFirestore) {}

  getRecipes() {
    return this.db.collection('recipes').snapshotChanges();
  }
  getRecipeDetails(id: string | undefined) {
    this.recipeDetails = this.db.object('/recipe-dish/' + id) as Observable<any>;
 return this.db.collection('recipes').doc(id).valueChanges();
  }
  createRecipes(recipes: Recipes) {
    return this.db.collection('recipes').add(recipes);
    return this.db.collection('recipes').add({
      name: recipes.name,
      description: recipes.description,
      image: recipes.image,
      recipes_category: recipes.recipe_category,
    });
  }
}
