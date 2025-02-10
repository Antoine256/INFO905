import {Component} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Output()
  counterChange = new EventEmitter<number>();
  counter: number = 0;
  min: number = -1;
  max: number = 2;
  showPopup: boolean = false;
  showPopup2: boolean = false;

  get imgSrc(): string {
    return `assets/${this.counter}.jpg`;
  }

  get imgSrc2(): string {
    console.log('imgSrc2 '+this.counter);
    return `assets/${this.counter}.jpg`;
  }

  updateCounter() {
    const randomValue = Math.round(Math.random());
    if (randomValue === 1 && this.counter < this.max) {
      if (this.counter === this.max)return
      this.counter++;
    } else if (randomValue === 0 && this.counter > this.min) {
      if (this.counter === this.min)return
      this.counter--;
    }
    this.counterChange.emit(this.counter);
  }

  searchResult() {
    console.log('searchResult');
    this.updateCounter()
    if (this.counter<0){
      this.showPopup2 = true;
      setTimeout(() => {
        this.showPopup2 = false;
      }, 3000);
    }else {
      this.showPopup = true;
      setTimeout(() => {
        this.showPopup = false;
      }, 3000);
    }
  }
}
