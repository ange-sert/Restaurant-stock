import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import Recipes from 'src/app/models/recipes.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-dish',
  templateUrl: './recipe-dish.component.html',
  styleUrls: ['./recipe-dish.component.css']
})
export class RecipeDishComponent implements OnInit {


	recipeID: any[] = [];
	public parameterValue: any[] = [];

	recipecollection: AngularFirestoreCollection<Recipes>;  
	recipe: Observable<Recipes[]>;  
	recipeDoc: AngularFirestoreDocument<Recipes>;
	recipe$: Observable<{}[]>;

  constructor(
  	private router: Router,
		private activatedRoute: ActivatedRoute,
		private db: AngularFirestore
  	) { }

  ngOnInit(): void {

  	this.activatedRoute.params.subscribe(parameter => {
			this.parameterValue = parameter.recipeID
			console.log(this.parameterValue);
		});

  	this.recipecollection = this.db.collection<{}>('recipes', ref => ref.where('recipeID', '==', this.parameterValue));
		this.recipe$ = this.recipecollection.snapshotChanges().pipe(
			map(actions => actions.map(a => {
				const data = a.payload.doc.data(); // DB Questions
				const id = a.payload.doc.id;
				return { id, ...data };

				console.log(this.recipe$);
			}))
			);


  }

}
