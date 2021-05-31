import { Component, OnInit } from '@angular/core';

import { Beefstew1pieceService } from 'src/app/beefstew1piece.service';
import { Beefstew1piece } from 'src/app/beefstew1piece.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  beefstew1piece: Beefstew1piece[] = [];
  constructor(private beefstew1pieceService: Beefstew1pieceService) {}

  ngOnInit() {
    this.beefstew1pieceService.getBeefStew1Pieces().subscribe((data) => {
      this.beefstew1piece = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Beefstew1piece;
      });
    });
  }
  create(beefstew1piece: Beefstew1piece) {
    this.beefstew1pieceService.createBeefStew1Piece(beefstew1piece);
  }
  update(beefstew1piece: Beefstew1piece) {
    this.beefstew1pieceService.updateBeefStew1Piece(beefstew1piece);
  }

  delete(id: string) {
    this.beefstew1pieceService.deleteBeefStew1Piece(id);
  }

}
