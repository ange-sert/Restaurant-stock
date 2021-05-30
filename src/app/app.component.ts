import { Component, OnInit } from '@angular/core';
import { Beefstew1pieceService } from 'src/app/beefstew1piece.service';
import { Beefstew1piece } from 'src/app/beefstew1piece.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  beefstew1piece: Beefstew1piece[] = [];

  constructor(private beefstew1pieceService: Beefstew1pieceService) {}
  private total = 0;
  private value: any;
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
   getTotalAmount() {
    if (this.beefstew1piece) {
      return this.beefstew1piece
        .map((t) => t.price)
        .reduce((a, value) => a + value, 0);
    }
    return 0;
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

