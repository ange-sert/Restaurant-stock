import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDishComponent } from './recipe-dish.component';

describe('RecipeDishComponent', () => {
  let component: RecipeDishComponent;
  let fixture: ComponentFixture<RecipeDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
