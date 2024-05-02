import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItineraryPage } from './itinerary.page';

describe('ItineraryPage', () => {
  let component: ItineraryPage;
  let fixture: ComponentFixture<ItineraryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
