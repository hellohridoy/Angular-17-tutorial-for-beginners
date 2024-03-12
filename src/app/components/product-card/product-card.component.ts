import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../types/products';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ProductCardComponent, MatCardModule, CommonModule, MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() viewProduct = new EventEmitter<number>();

  view() {
    console.log('Button clicked');
    this.viewProduct.emit(this.product.id);
  }
}
