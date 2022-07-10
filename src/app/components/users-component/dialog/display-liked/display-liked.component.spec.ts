import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLikedComponent } from './display-liked.component';

describe('DisplayLikedComponent', () => {
  let component: DisplayLikedComponent;
  let fixture: ComponentFixture<DisplayLikedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayLikedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayLikedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
