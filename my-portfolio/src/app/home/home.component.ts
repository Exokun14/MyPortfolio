import { Component, ElementRef, ViewChild} from '@angular/core';
import { FeaturedComponentAComponent } from './featured-component-a/featured-component-a.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeaturedComponentAComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  @ViewChild('scrollButtonHolder', {static: true}) scrollButtonHolderRef!: ElementRef;
  @ViewChild('imageSlideshow', {static: true}) imageSlideshowRef!: ElementRef;

  scrollLeft()
  {
    console.log('scrolling left');
  }

  scrollRight() 
  {
    console.log('scrolling right');
  }
  
  ngAfterViewInit() 
  {
    this.imageSlideshowRef.nativeElement.addEventListener('mouseenter', () => {
      this.scrollButtonHolderRef.nativeElement.style.display = 'unset';
    });

    this.imageSlideshowRef.nativeElement.addEventListener('mouseleave', () => {
      this.scrollButtonHolderRef.nativeElement.style.display = 'none';
    });
  }
  

}
