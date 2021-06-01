import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Beefstew1pieceService } from 'src/app/beefstew1piece.service';
import { Beefstew1piece } from 'src/app/beefstew1piece.model';

import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  beefstew1piece: Beefstew1piece[] = [];
  products: Products[] = [];

  public productForm: FormGroup;

  constructor(
    private beefstew1pieceService: Beefstew1pieceService,
    private productsService: ProductsService,
    public formBuilder: FormBuilder,

    ) {

    this.productForm = this.formBuilder.group({
      name: [''],
      description: [''],
      image: [''],
      unit_price:[''],
      product_category:[''],
      quantity: [''],
      supplier: [''],
    })
  }

  ngOnInit() {
    this.beefstew1pieceService.getBeefStew1Pieces().subscribe((data) => {
      this.beefstew1piece = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Beefstew1piece;
      });
    });

    //read products 
    this.productsService.getProducts().subscribe((data) => {
      this.products = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Products;
      });
    });

  }


  // Form Getters
  get name(){
    return this.productForm.get('name')
  }
  get description(){
    return this.productForm.get('description')
  }
  get image(){
    return this.productForm.get('image')
  }
  get unit_price(){
    return this.productForm.get('unit_price')
  }
  get product_category(){
    return this.productForm.get('product_category')
  }
  get quantity(){
    return this.productForm.get('quantity')
  }
  get supplier(){
    return this.productForm.get('supplier')
  }




  // create new product
  create(products: Products) 
  {
    this.productsService.createProduct(products);
  }

  onSubmit() {
    this.productsService.createProduct(this.productForm.value);
  };


  update(beefstew1piece: Beefstew1piece) {
    this.beefstew1pieceService.updateBeefStew1Piece(beefstew1piece);
  }

  delete(id: string) {
    this.beefstew1pieceService.deleteBeefStew1Piece(id);
  }

}
