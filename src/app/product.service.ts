import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from './types/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  httpClient = inject(HttpClient);
  products = [];
  constructor() {}
  getProducts() {
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }
  getProductById(id: number) {
    return this.httpClient.get<Product>('http://localhost:3000/product/' + id);
  }
}
