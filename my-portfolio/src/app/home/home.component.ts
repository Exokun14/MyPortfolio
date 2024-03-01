import { Component, ElementRef, ViewChild} from '@angular/core';
import { FeaturedComponentAComponent } from './featured-component-a/featured-component-a.component';
import { FeaturedComponentBComponent } from './featured-component-b/featured-component-b.component';
import { NewsAndUpdatesComponentComponent } from './news-and-updates-component/news-and-updates-component.component';
import { SubFeatureComponentAComponent } from './sub-feature-component-a/sub-feature-component-a.component';
import { SubFeatureComponentBComponent } from './sub-feature-component-b/sub-feature-component-b.component';
import { DisplayBoxComponentComponent } from './display-box-component/display-box-component.component';
import { filter } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeaturedComponentAComponent, FeaturedComponentBComponent, NewsAndUpdatesComponentComponent, SubFeatureComponentAComponent, SubFeatureComponentBComponent, DisplayBoxComponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

}
