import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'product-management';
  a = 7;
  b = 9;
}
