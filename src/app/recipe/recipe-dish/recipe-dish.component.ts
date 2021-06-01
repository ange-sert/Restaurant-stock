import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import {Recipes} from 'src/app/models/recipes.model';

import { SuppliersService } from 'src/app/services/suppliers.service';
import { Suppliers } from 'src/app/models/suppliers.model';

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

  suppliers: Suppliers[] = [];




  constructor(
  	private router: Router,
		private activatedRoute: ActivatedRoute,
		public db: AngularFirestore,
    private suppliersService: SuppliersService,
  	) { 

    //read Suppliers 
    this.suppliersService.getSuppliers().subscribe((data) => {
      this.suppliers = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Suppliers;
      });
    });

  }

  ngOnInit(): void {

  	this.activatedRoute.params.subscribe(parameter => {
			this.parameterValue = parameter.recipeID
			console.log(this.parameterValue);
		});



  }

}


