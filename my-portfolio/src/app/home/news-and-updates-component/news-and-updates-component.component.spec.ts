import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAndUpdatesComponentComponent } from './news-and-updates-component.component';

describe('NewsAndUpdatesComponentComponent', () => {
  let component: NewsAndUpdatesComponentComponent;
  let fixture: ComponentFixture<NewsAndUpdatesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsAndUpdatesComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsAndUpdatesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
