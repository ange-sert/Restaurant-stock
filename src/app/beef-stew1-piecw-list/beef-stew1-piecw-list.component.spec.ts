import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeefStew1PiecwListComponent } from './beef-stew1-piecw-list.component';

describe('BeefStew1PiecwListComponent', () => {
  let component: BeefStew1PiecwListComponent;
  let fixture: ComponentFixture<BeefStew1PiecwListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeefStew1PiecwListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeefStew1PiecwListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
