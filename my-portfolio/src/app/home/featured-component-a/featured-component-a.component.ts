import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-featured-component-a',
  standalone: true,
  imports: [],
  templateUrl: './featured-component-a.component.html',
  styleUrl: './featured-component-a.component.css'
})
export class FeaturedComponentAComponent {

  @ViewChild ('test', {static: true}) testRef!: ElementRef;

  ngAfterViewInit() {

    /*
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // testRef is in the viewport
          console.log('testRef is in the viewport');
        } else {
          // testRef is not in the viewport
          console.log('testRef is not in the viewport');
        }
      });
    });

    observer.observe(this.testRef.nativeElement);
  }

  */
}
}
