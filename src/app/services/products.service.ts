import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Products } from 'src/app/models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
  	private firestore: AngularFirestore
  ) {}

  getProducts() {
    return this.firestore.collection('product').snapshotChanges();
  }

  createProducts(product: Products) {
    return this.firestore.collection('product').add(product);
  }
  updateProducts(product: Products) {
    delete product.id;
    this.firestore
      .doc('product/' + product.id)
      .update(product);
  }
  deleteProducts(beefId: string) {
    this.firestore.doc('product/' + beefId).delete();
  }
}
