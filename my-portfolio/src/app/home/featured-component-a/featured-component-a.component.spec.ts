import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedComponentAComponent } from './featured-component-a.component';

describe('FeaturedComponentAComponent', () => {
  let component: FeaturedComponentAComponent;
  let fixture: ComponentFixture<FeaturedComponentAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedComponentAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedComponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
