import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from '../search/search.component';
import { ProductService } from '../../product.service';
import { Product } from '../../types/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, MatCardModule, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products: Product[] = [];
  filterProduct: any[] = [];
  productService = inject(ProductService);
  router = inject(Router);
  ngOnInit() {
    this.productService.getProducts().subscribe((result) => {
      console.log(result);
      this.products = result as any[];
      this.filterProduct = this.products;
    });
  }
  onViewProduct(event: any) {
    console.log('onViewProduct Called', event);
    this.router.navigateByUrl('/product/' + event);
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
