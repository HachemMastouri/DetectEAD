import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspDetecteadComponent } from './susp-detectead.component';

describe('SuspDetecteadComponent', () => {
  let component: SuspDetecteadComponent;
  let fixture: ComponentFixture<SuspDetecteadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuspDetecteadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuspDetecteadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
