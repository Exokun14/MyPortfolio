import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponentContainerComponent } from './news-component-container.component';

describe('NewsComponentContainerComponent', () => {
  let component: NewsComponentContainerComponent;
  let fixture: ComponentFixture<NewsComponentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsComponentContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsComponentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
