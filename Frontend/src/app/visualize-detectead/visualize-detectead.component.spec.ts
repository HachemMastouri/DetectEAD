import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeDetecteadComponent } from './visualize-detectead.component';

describe('VisualizeDetecteadComponent', () => {
  let component: VisualizeDetecteadComponent;
  let fixture: ComponentFixture<VisualizeDetecteadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizeDetecteadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizeDetecteadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
