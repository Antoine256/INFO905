import { Component } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { SearchInputComponent } from '../search-input/search-input.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PopupComponent,SearchInputComponent],
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
