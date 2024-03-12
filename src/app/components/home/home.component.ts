import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, MatCardModule],
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
      name: 'Men sky blue Jeans',
    },
    {
      id: '2',
      brand: 'US.POLO',
      image:
        'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/q/6/-original-imags487ftf3g2s7.jpeg?q=70&crop=false',
      currentPrice: '500',
      standardPrice: '150',
      discount: '50',
      name: 'Men sky blue Jeans',
    },
    {
      id: '3',
      brand: 'US.POLO',
      image:
        'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/q/6/-original-imags487ftf3g2s7.jpeg?q=70&crop=false',
      currentPrice: '500',
      standardPrice: '150',
      discount: '50',
      name: 'Men sky blue Jeans',
    },
    {
      id: '4',
      brand: 'US.POLO',
      image:
        'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/q/6/-original-imags487ftf3g2s7.jpeg?q=70&crop=false',
      currentPrice: '500',
      standardPrice: '150',
      discount: '50',
      name: 'Men sky blue Jeans',
    },
    {
      id: '5',
      brand: 'US.POLO',
      image:
        'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/q/6/-original-imags487ftf3g2s7.jpeg?q=70&crop=false',
      currentPrice: '500',
      standardPrice: '150',
      discount: '50',
      name: 'Men sky blue Jeans',
    },
    {
      id: '6',
      brand: 'US.POLO',
      image:
        'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/q/6/-original-imags487ftf3g2s7.jpeg?q=70&crop=false',
      currentPrice: '500',
      standardPrice: '150',
      discount: '50',
      name: 'Men sky blue Jeans',
    },
  ];
  onViewProduct(event: any) {
    console.log('onViewProduct Called', event);
  }
}
