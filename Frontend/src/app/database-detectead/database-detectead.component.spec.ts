import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseDetecteadComponent } from './database-detectead.component';

describe('DatabaseDetecteadComponent', () => {
  let component: DatabaseDetecteadComponent;
  let fixture: ComponentFixture<DatabaseDetecteadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabaseDetecteadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatabaseDetecteadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
