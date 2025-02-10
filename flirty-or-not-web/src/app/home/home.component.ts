import { Component } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PopupComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {
  onButtonClick() {
    console.log('Button clicked!');
  }
}
