import {Component, HostListener} from '@angular/core';
import { Output,Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule, HttpClientModule ],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Output()
  counterChange = new EventEmitter<number>();
  @Input()
  searchText: string = '';
  counter: number = 0;
  min: number = -1;
  max: number = 2;
  showPopup: boolean = false;
  showPopup2: boolean = false;

  constructor(private http: HttpClient) {
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.searchResult();
    }
  }

  get imgSrc(): string {
    return `assets/${this.counter}.jpg`;
  }

  get imgSrc2(): string {
    console.log('imgSrc2 '+this.counter);
    return `assets/-1.jpg`;
  }

  updateCounter( value: number) {
    if (value === 1 && this.counter < this.max) {
      this.counter++;
    } else if (value === 0 && this.counter > this.min) {
      this.counter--;
    }
    this.counterChange.emit(this.counter);
  }

  async searchResult() {
    console.log('searchResult');
    let response = await this.search() as number
    console.log(response);
    this.updateCounter(response)
    if (response == 0) {
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

  async search() {
    const url = `http://127.0.0.1:5000/classify?text=${encodeURIComponent(this.searchText)}`;
      try {
        const responsetest = await fetch(url)
        const res2 = await responsetest.json()
        console.log(res2)
        const response = res2[0].label
        let res = 0
        if (response == "LABEL_1") res = 1
        return res;
      } catch (error) {
        console.error('Erreur dans getData:', error);
        throw error;
      }
  }
}
