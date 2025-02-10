import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngIf and json pipe

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
  standalone: true,  // Make this component standalone
  imports: [HttpClientModule, FormsModule, CommonModule]  // Include CommonModule here
})
export class SearchInputComponent {
  searchText: string = '';
  result: any;

  constructor(private http: HttpClient) {}

  search() {
    console.log(this.searchText)
    const url = `http://127.0.0.1:5000/classify?text=${encodeURIComponent(this.searchText)}`;
    console.log(url)
    this.http.get(url).subscribe(
      (response) => {
        this.result = response;
        console.log('Search Result:', this.result);
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }
}
