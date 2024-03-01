import { Component, ElementRef, ViewChild } from '@angular/core';
import { stat } from 'node:fs';

@Component({
  selector: 'app-display-box-content-component',
  standalone: true,
  imports: [],
  templateUrl: './display-box-content-component.component.html',
  styleUrl: './display-box-content-component.component.css'
})
export class DisplayBoxContentComponentComponent {

  @ViewChild('button', {static: true}) buttonRef!: ElementRef;
  @ViewChild('description', {static: true}) descriptionRef!: ElementRef;

  status = false;

  divisionController()
  {
    if (this.status == false)
    {
      this.status = true;
      this.buttonRef.nativeElement.style.height = "48vh";
      this.buttonRef.nativeElement.style.backgroundColor = "var(--background-secondary)";
      this.buttonRef.nativeElement.style.color = "var(--text-color)";

      this.descriptionRef.nativeElement.style.display = "unset";
    }
    else if (this.status == true)
    {
      this.status = false;
      this.buttonRef.nativeElement.style.height = "8vh";
      this.buttonRef.nativeElement.style.backgroundColor = "transparent";
      this.buttonRef.nativeElement.style.color = "var(--background)";

      this.descriptionRef.nativeElement.style.display = "none";
    }
  }

  ngAfterViewInit()
  {
    this.buttonRef.nativeElement.style.color = "var(--background)";

    this.buttonRef.nativeElement.addEventListener('mouseenter', () => 
    {
      if (this.status == false)
      {
        this.buttonRef.nativeElement.style.transition = "0.5s";
        this.buttonRef.nativeElement.style.backgroundColor = "var(--background-secondary)";
        this.buttonRef.nativeElement.style.color = "var(--text-color)";
        cursor: 'pointer';
      }
    });

    this.buttonRef.nativeElement.addEventListener('mouseleave', () => 
    {
      if (this.status == false)
      {
        this.buttonRef.nativeElement.style.transition = "0.5s";
        this.buttonRef.nativeElement.style.backgroundColor = "transparent";
        this.buttonRef.nativeElement.style.color = "var(--background)";
      }
    });
  }

}
