import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesSimilaresComponent } from './series-similares.component';

describe('SeriesSimilaresComponent', () => {
  let component: SeriesSimilaresComponent;
  let fixture: ComponentFixture<SeriesSimilaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesSimilaresComponent]
    });
    fixture = TestBed.createComponent(SeriesSimilaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
