import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSerieComponent } from './card-serie.component';

describe('CardSerieComponent', () => {
  let component: CardSerieComponent;
  let fixture: ComponentFixture<CardSerieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSerieComponent]
    });
    fixture = TestBed.createComponent(CardSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
