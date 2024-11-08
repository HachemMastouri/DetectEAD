import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDetecteadComponent } from './check-detectead.component';

describe('CheckDetecteadComponent', () => {
  let component: CheckDetecteadComponent;
  let fixture: ComponentFixture<CheckDetecteadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckDetecteadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckDetecteadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
