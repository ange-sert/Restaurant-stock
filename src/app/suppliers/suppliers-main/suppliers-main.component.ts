import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";

import { RecipesService } from 'src/app/services/recipes.service';
import { Recipes } from 'src/app/models/recipes.model';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/models/products.model';

import { SuppliersService } from 'src/app/services/suppliers.service';
import { Suppliers } from 'src/app/models/suppliers.model';


@Component({
  selector: 'app-suppliers-main',
  templateUrl: './suppliers-main.component.html',
  styleUrls: ['./suppliers-main.component.css']
})
export class SuppliersMainComponent implements OnInit {

  suppliers: Suppliers[] = [];
  products: Products[] = [];
  recipes: Recipes[] = [];

  public suppliersForm: FormGroup;

  constructor(
    private toastr: ToastrService,
    public formBuilder: FormBuilder,
    public router: Router,
    private recipesService: RecipesService,
    private productsService: ProductsService,
    private suppliersService: SuppliersService,
    ) { 

    this.suppliersForm = this.formBuilder.group({
      name: [''],
      description: [''],
      image: [''],
      address:[''],
      phone:[''],
      email:[''],
      contact_person:[''],
      category:[''],
    })
  }

  ngOnInit(): void {

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

  // Form Getters
  get name(){
    return this.suppliersForm.get('name')
  }
  get description(){
    return this.suppliersForm.get('description')
  }
  get image(){
    return this.suppliersForm.get('image')
  }


  onSubmit() {
    this.suppliersService.createSuppliers(this.suppliersForm.value);
    this.toastr.success('Successfully Added A New Supplier', 'Toastr fun!');
    this.router.navigate(['main']);
  };

}
