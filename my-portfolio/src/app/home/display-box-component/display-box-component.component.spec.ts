import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBoxComponentComponent } from './display-box-component.component';

describe('DisplayBoxComponentComponent', () => {
  let component: DisplayBoxComponentComponent;
  let fixture: ComponentFixture<DisplayBoxComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayBoxComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayBoxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
