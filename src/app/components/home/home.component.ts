import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from '../search/search.component';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, MatCardModule, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products: any[] = [];
  filterProduct: any[] = [];
  productService = inject(ProductService);
  ngOnInit() {
    this.products = this.productService.products;
    this.filterProduct = this.products;
  }
  onViewProduct(event: any) {
    console.log('onViewProduct Called', event);
  }
  onSearch(search: string) {
    console.log('home ', search);
    if (search) {
      this.filterProduct = this.products.filter((x) => x.name.includes(search));
    } else {
      this.filterProduct = this.products;
    }
  }
}
