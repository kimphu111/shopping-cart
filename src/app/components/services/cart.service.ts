import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  products: {
    id: number;
    name: string;
    img: string;
    price: number;
    inStock: number;
  }[] = [
    {
      id: 1,
      name: 'Áo khoác',
      img: '../assets/1.jpg',
      price: 100,
      inStock: 10,
    },
    {
      id: 2,
      name: 'Áo sơ mi',
      img: '../assets/1.jpg',

      price: 200,
      inStock: 20,
    },
    {
      id: 3,
      name: 'Áo thun',
      img: '../assets/1.jpg',

      price: 300,
      inStock: 30,
    },
    {
      id: 4,
      name: 'Áo len',
      img: '../assets/1.jpg',

      price: 400,
      inStock: 40,
    },
    {
      id: 5,
      name: 'Quần jean',
      img: '../assets/1.jpg',

      price: 400,
      inStock: 40,
    },
    {
      id: 6,
      name: 'Quần kaki',
      img: '../assets/1.jpg',

      price: 400,
      inStock: 40,
    },
    {
      id: 7,
      name: 'Quần tây',
      img: '../assets/1.jpg',

      price: 400,
      inStock: 40,
    },
    {
      id: 8,
      name: 'Quần thun',
      img: '../assets/1.jpg',

      price: 400,
      inStock: 40,
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
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }
}

export class navComponent {
  constructor() {}
}
