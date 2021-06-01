import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";

import { RecipesService } from 'src/app/services/recipes.service';
import { Recipes } from 'src/app/models/recipes.model';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-recipe-main',
  templateUrl: './recipe-main.component.html',
  styleUrls: ['./recipe-main.component.css']
})
export class RecipeMainComponent implements OnInit {

	recipes: Recipes[] = [];
	products: Products[] = [];

	public recipeForm: FormGroup;

  constructor(
    private toastr: ToastrService,
  	public formBuilder: FormBuilder,
    public router: Router,
  	private recipesService: RecipesService,
  	private productsService: ProductsService,
  	) { 

  	this.recipeForm = this.formBuilder.group({
      name: [''],
      description: [''],
      image: [''],
      recipe_category:[''],
    })
  }

  ngOnInit(): void {

  	//read products 
    this.productsService.getProducts().subscribe((data) => {
      this.products = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Products;
      });
    });

    //read Recipes 
    this.recipesService.getRecipes().subscribe((data) => {
      this.recipes = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Products;
      });
    });
  }


  // Form Getters
  get name(){
    return this.recipeForm.get('name')
  }
  get description(){
    return this.recipeForm.get('description')
  }
  get image(){
    return this.recipeForm.get('image')
  }
  get product_category(){
    return this.recipeForm.get('recipe_category')
  }


  onSubmit() {
    this.recipesService.createRecipes(this.recipeForm.value);
    this.toastr.success('Successfully Added A New Recipe', 'Toastr fun!');
    this.router.navigate(['/recipe-dish']);
  };

}
