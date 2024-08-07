import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ProductModel } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: any;

  constructor(private authService: AuthService) {}

  products: ProductModel[] = [
    {
      id: 1,
      name: 'Áo polo đơn giản',
      img: 'assets/pictrue/1.jpg',
      price: 100,
      inStock: 10,
    },
    {
      id: 2,
      name: 'Áo polo nam xanh',
      img: 'assets/pictrue/2.jpg',
      price: 200,
      inStock: 20,
    },
    {
      id: 3,
      name: 'Áo polo nam sọc kẻ đen',
      img: 'assets/pictrue/3.jpg',
      price: 300,
      inStock: 30,
    },
    {
      id: 4,
      name: 'Áo thun ',
      img: 'assets/pictrue/4.jpg',
      price: 400,
      inStock: 40,
    },
    {
      id: 5,
      name: 'Quần ngắn ',
      img: 'assets/pictrue/quanDui.jpg',
      price: 400,
      inStock: 40,
    },
    {
      id: 6,
      name: 'Quần ngắn nữ',
      img: 'assets/pictrue/quanHelloKitty.jpg',
      price: 400,
      inStock: 40,
    },
    {
      id: 7,
      name: 'Quần jean nam/nữ',
      img: 'assets/pictrue/quanJean.jpg',
      price: 299.0,
      inStock: 80,
    },
    {
      id: 8,
      name: 'Váy nữ',
      img: 'assets/pictrue/vayNgan.jpg',
      price: 159.0,
      inStock: 11,
    },
    {
      id: 9,
      name: 'Quần dải vải',
      img: 'assets/pictrue/9.jpg',
      price: 159.0,
      inStock: 11,
    },
  ];

  cart: {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    total: number;
  }[] = [];

  addToCart(item: any) {
    // check if item is already in cart and increase quantity
    const indexCart = this.cart.findIndex((i) => i.id === item.id);
    if (indexCart !== -1) {
      this.cart[indexCart].quantity++;
      this.cart[indexCart].total =
        this.cart[indexCart].quantity * this.cart[indexCart].price;
    } else {
      this.cart.push({ ...item, quantity: 1, total: item.price });
    }
    const indexProduct = this.products.findIndex((i) => i.id === item.id);
    this.products[indexProduct].inStock--;
    if (this.products[indexProduct].inStock === 0) {
      this.products.splice(indexProduct, 1);
    }
    // check if user is logged in if user logged in then users just can add to cart
    if (this.authService.currentUser) {
      this.items.push(item);
      console.log('item added to cart', item);
    } else {
      alert('Please login to add to cart');
      console.log('Please login to add to cart', item);
    }
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  removeItem(id: number) {}
}
