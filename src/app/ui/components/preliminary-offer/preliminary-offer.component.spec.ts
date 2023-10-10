import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreliminaryOfferComponent } from './preliminary-offer.component';

describe('PreliminaryOfferComponent', () => {
  let component: PreliminaryOfferComponent;
  let fixture: ComponentFixture<PreliminaryOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreliminaryOfferComponent]
    });
    fixture = TestBed.createComponent(PreliminaryOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
