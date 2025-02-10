import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  counter: number = 0;
  min: number = -1;
  max: number = 2;
  showPopup: boolean = false;

  get imgSrc(): string {
    return `assets/${this.counter}.jpg`;
  }

  updateCounter() {
    const randomValue = Math.round(Math.random());
    
    if (randomValue === 1 && this.counter < this.max) {
      this.counter++;
    } else if (randomValue === 0 && this.counter > this.min) {
      this.counter--;
    }
  }

  togglePopup() {
    this.showPopup = true;
    setTimeout(() => {
      this.showPopup = false;
    }, 3000); // Hide after 3 seconds
  }
}
