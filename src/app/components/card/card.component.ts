import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductModel } from '../../models/product.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [NgOptimizedImage],
})
export class ProductCardComponent {
  @Input() product!: ProductModel;

  constructor(public cartService: CartService) {}
}
