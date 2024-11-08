import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDetecteadComponent } from './home-detectead.component';

describe('HomeDetecteadComponent', () => {
  let component: HomeDetecteadComponent;
  let fixture: ComponentFixture<HomeDetecteadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDetecteadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDetecteadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
