import { Component } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { SearchInputComponent } from '../search-input/search-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PopupComponent, SearchInputComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  percentage = 0;
  textToSearch = '';

  counterChange(event: number) {
    console.log('Counter changed to: ' + event);
    this.percentage = event*100/3;
  }
}
