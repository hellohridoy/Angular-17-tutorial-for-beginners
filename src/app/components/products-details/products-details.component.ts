import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../types/products';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss',
})
export class ProductsDetailsComponent {
  product!: Product;
  productServicee = inject(ProductService);
  ngOnInit() {
    let productId = 1;
    this.productServicee.getProductById(productId).subscribe((result) => {
      this.product = result;
    });
  }
}
