import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandmarksPage } from './landmarks.page';

describe('LandmarksPage', () => {
  let component: LandmarksPage;
  let fixture: ComponentFixture<LandmarksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LandmarksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
