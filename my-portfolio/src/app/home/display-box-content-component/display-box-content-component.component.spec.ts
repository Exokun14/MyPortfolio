import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBoxContentComponentComponent } from './display-box-content-component.component';

describe('DisplayBoxContentComponentComponent', () => {
  let component: DisplayBoxContentComponentComponent;
  let fixture: ComponentFixture<DisplayBoxContentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayBoxContentComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayBoxContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
