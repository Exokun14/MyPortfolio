import { Component } from '@angular/core';
import { DisplayBoxContentComponentComponent } from '../display-box-content-component/display-box-content-component.component';

@Component({
  selector: 'app-display-box-component',
  standalone: true,
  imports: [DisplayBoxContentComponentComponent],
  templateUrl: './display-box-component.component.html',
  styleUrl: './display-box-component.component.css'
})
export class DisplayBoxComponentComponent {

}
