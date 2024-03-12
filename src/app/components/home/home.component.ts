import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, MatCardModule, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products = [
    {
      id: '1',
      brand: 'US.POLO',
      image:
        'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/q/6/-original-imags487ftf3g2s7.jpeg?q=70&crop=false',
      currentPrice: '500',
      standardPrice: '150',
      discount: '50',
      name: 'Hello',
    },
    {
      id: '2',
      brand: 'US',
      image:
        'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/q/6/-original-imags487ftf3g2s7.jpeg?q=70&crop=false',
      currentPrice: '500',
      standardPrice: '150',
      discount: '50',
      name: 'Mensky',
    },
    {
      id: '3',
      brand: 'UK',
      image:
        'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/q/6/-original-imags487ftf3g2s7.jpeg?q=70&crop=false',
      currentPrice: '500',
      standardPrice: '150',
      discount: '50',
      name: 'Hi',
    },
    {
      id: '4',
      brand: 'US.POLO',
      image:
        'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/q/6/-original-imags487ftf3g2s7.jpeg?q=70&crop=false',
      currentPrice: '500',
      standardPrice: '150',
      discount: '50',
      name: 'blue ',
    },
    {
      id: '5',
      brand: 'US.POLO',
      image:
        'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/q/6/-original-imags487ftf3g2s7.jpeg?q=70&crop=false',
      currentPrice: '500',
      standardPrice: '150',
      discount: '50',
      name: 'Men ',
    },
    {
      id: '6',
      brand: 'US.POLO',
      image:
        'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/q/6/-original-imags487ftf3g2s7.jpeg?q=70&crop=false',
      currentPrice: '500',
      standardPrice: '150',
      discount: '50',
      name: 'Jeans',
    },
  ];

  filterProduct: any[] = [];
  ngOnInit() {
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
