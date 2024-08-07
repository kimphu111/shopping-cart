import { Component } from '@angular/core';
import { ProductCardComponent } from '../../card/card.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [ProductCardComponent, RouterLink],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss',
})
export class ListProductComponent {
  constructor(public CartService: CartService) {}
}
