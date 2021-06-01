import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import {Recipes} from 'src/app/models/recipes.model';
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




  constructor(
  	private router: Router,
		private activatedRoute: ActivatedRoute,
		public db: AngularFirestore
  	) { 

  }

  ngOnInit(): void {

  	this.activatedRoute.params.subscribe(parameter => {
			this.parameterValue = parameter.recipeID
			console.log(this.parameterValue);
		});



  }

}


