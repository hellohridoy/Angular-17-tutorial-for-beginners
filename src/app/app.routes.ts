import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: HomeComponent,
  },
  {
    path: 'product/:id',
    component: ProductsDetailsComponent,
  },
];
