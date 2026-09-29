import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTrackerPageComponent } from './service-tracker-page.component';

describe('ServiceTrackerPageComponent', () => {
  let component: ServiceTrackerPageComponent;
  let fixture: ComponentFixture<ServiceTrackerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceTrackerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceTrackerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
