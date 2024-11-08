import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyDetecteadComponent } from './notify-detectead.component';

describe('NotifyDetecteadComponent', () => {
  let component: NotifyDetecteadComponent;
  let fixture: ComponentFixture<NotifyDetecteadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotifyDetecteadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotifyDetecteadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
