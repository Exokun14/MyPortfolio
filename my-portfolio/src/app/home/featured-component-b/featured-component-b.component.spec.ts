import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedComponentBComponent } from './featured-component-b.component';

describe('FeaturedComponentBComponent', () => {
  let component: FeaturedComponentBComponent;
  let fixture: ComponentFixture<FeaturedComponentBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedComponentBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedComponentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
