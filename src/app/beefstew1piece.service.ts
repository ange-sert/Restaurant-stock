import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Beefstew1piece } from 'src/app/beefstew1piece.model';

@Injectable({
  providedIn: 'root',
})
export class Beefstew1pieceService {
  constructor(private firestore: AngularFirestore) {}
  getBeefStew1Pieces() {
    return this.firestore.collection('beefstew1piece').snapshotChanges();
  }
  createBeefStew1Piece(beefstew1piece: Beefstew1piece) {
    return this.firestore.collection('beefstew1piece').add(beefstew1piece);
  }
  updateBeefStew1Piece(beefstew1piece: Beefstew1piece) {
    delete beefstew1piece.id;
    this.firestore
      .doc('beefstew1piece/' + beefstew1piece.id)
      .update(beefstew1piece);
  }
  deleteBeefStew1Piece(beefId: string) {
    this.firestore.doc('beefstew1piece/' + beefId).delete();
  }
}
