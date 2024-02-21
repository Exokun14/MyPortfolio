import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  @ViewChild('test', {static: true}) testRef!: ElementRef;
  @ViewChild('scrollButtonHolder', {static: true}) scrollButtonHolderRef!: ElementRef;
  @ViewChild('imageSlideshow', {static: true}) imageSlideshowRef!: ElementRef;

  updateTest() {

    console.log(this.testRef.nativeElement.innerHTML);

    this.testRef.nativeElement.innerHTML = 'The Greatest Developer That&#39s Ever Lived';
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
