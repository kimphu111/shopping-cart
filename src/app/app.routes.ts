import { Routes } from '@angular/router';
import { ListProductComponent } from './components/pages/list-product/list-product.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ListProductComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
  },
];
