import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinSocketsComponent } from './bitcoin-sockets.component';

describe('BitcoinSocketsComponent', () => {
  let component: BitcoinSocketsComponent;
  let fixture: ComponentFixture<BitcoinSocketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitcoinSocketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinSocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
