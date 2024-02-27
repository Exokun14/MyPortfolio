import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFeatureComponentAComponent } from './sub-feature-component-a.component';

describe('SubFeatureComponentAComponent', () => {
  let component: SubFeatureComponentAComponent;
  let fixture: ComponentFixture<SubFeatureComponentAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubFeatureComponentAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubFeatureComponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
