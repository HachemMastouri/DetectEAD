import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiInfoDetcteadComponent } from './ai-info-detctead.component';

describe('AiInfoDetcteadComponent', () => {
  let component: AiInfoDetcteadComponent;
  let fixture: ComponentFixture<AiInfoDetcteadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiInfoDetcteadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiInfoDetcteadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
