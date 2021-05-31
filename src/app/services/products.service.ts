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

  createProduct(product: Products) {
    return this.firestore.collection('product').add(product);
    return this.firestore
		.collection("product")
		.add({
			name: product.name,
			description: product.description,
			image: product.image,
			unit_price: product.unit_price,
			product_category: product.product_category,
			quantity: product.quantity
		});
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
