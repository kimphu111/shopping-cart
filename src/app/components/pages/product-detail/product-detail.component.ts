import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../../models/product.model';
import { CartService } from '../../services/cart.service';
import { NgOptimizedImage } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  detailProduct!: ProductModel;
  quantity: number = 1;
  totalPrice: number = 0;

  constructor(
    private CartService: CartService,
    private activatedRoute: ActivatedRoute,
    private AuthService: AuthService,
  ) {
    const { id } = this.activatedRoute.snapshot.params;
    this.detailProduct = this.CartService.products.find(
      (product) => product.id === parseInt(id),
    ) as ProductModel;
    this.calculateTotal();
  }

  calculateTotal(): void {
    if (this.detailProduct) {
      this.totalPrice = this.quantity * this.detailProduct.price;
    }
  }

  increaseQuantity(): void {
    this.quantity++;
    this.calculateTotal();
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      // Đảm bảo số lượng không nhỏ hơn 1
      this.quantity--;
      this.calculateTotal();
    }
  }

  addToCart(product: ProductModel): void {
    if (!this.AuthService.currentUser()) {
      alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng');
      return;
    }

    this.CartService.addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: this.quantity,
    });
  }
}
