import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SFibonacciComponent } from './s-fibonacci.component';

describe('SFibonacciComponent', () => {
  let component: SFibonacciComponent;
  let fixture: ComponentFixture<SFibonacciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SFibonacciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SFibonacciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
