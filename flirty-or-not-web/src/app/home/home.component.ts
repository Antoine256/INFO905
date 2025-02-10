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

  percentage = 0;

  onButtonClick() {
    console.log('Button clicked!');
    this.percentage = Math.floor(Math.random() * 100);
  }
}
