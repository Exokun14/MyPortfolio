import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFeatureComponentBComponent } from './sub-feature-component-b.component';

describe('SubFeatureComponentBComponent', () => {
  let component: SubFeatureComponentBComponent;
  let fixture: ComponentFixture<SubFeatureComponentBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubFeatureComponentBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubFeatureComponentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
