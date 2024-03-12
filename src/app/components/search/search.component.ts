import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule, MatButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  onSearch() {
    console.log('onSeach called');
    this.search.emit(this.text);
  }
  text = '';
  inputChange(event: any) {
    console.log('input Changing', event.target.value);
    this.text = event.target.value;
  }
  onTyping(event: any) {
    console.log('on Typing called', event.target.value);
  }
}
