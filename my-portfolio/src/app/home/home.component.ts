import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @ViewChild('test', {static: true}) testRef!: ElementRef;

  updateTest() {
    console.log(this.testRef.nativeElement.innerHTML);

    this.testRef.nativeElement.innerHTML = 'The Greatest Developer That&#39s Ever Lived';
  }

}
