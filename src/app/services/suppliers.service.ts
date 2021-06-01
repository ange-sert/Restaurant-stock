import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Recipes } from 'src/app/models/recipes.model';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(
    private firestore: AngularFirestore
    ) { 


  }

  getSuppliers() {
    return this.firestore.collection('suppliers').snapshotChanges();
  }

  createSuppliers(suppliers: suppliers) {
    return this.firestore.collection('Suppliers').add(Suppliers);
    return this.firestore
    .collection("Suppliers")
    .add({
      name: suppliers.name,
      description: suppliers.description,
      image: suppliers.image,
      address: suppliers.address,
      phone: suppliers.phone,
      email: suppliers.email,
      contact_person: suppliers.category,
      category: suppliers.category,

    });
  }
}
