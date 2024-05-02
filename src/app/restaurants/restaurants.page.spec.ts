import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantsPage } from './restaurants.page';

describe('RestaurantsPage', () => {
  let component: RestaurantsPage;
  let fixture: ComponentFixture<RestaurantsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
