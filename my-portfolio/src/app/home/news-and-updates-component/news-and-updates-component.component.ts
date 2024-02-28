import { Component } from '@angular/core';
import { NewsComponentContainerComponent } from './news-component-container/news-component-container.component';

@Component({
  selector: 'app-news-and-updates-component',
  standalone: true,
  imports: [NewsComponentContainerComponent],
  templateUrl: './news-and-updates-component.component.html',
  styleUrl: './news-and-updates-component.component.css'
})
export class NewsAndUpdatesComponentComponent {

}
