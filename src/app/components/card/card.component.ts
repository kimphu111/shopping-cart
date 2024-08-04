import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { CartService } from '../services/cart.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// import * as console from 'node:console';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() img: string = '';
  @Input() price!: number;
  @Input() inStock!: number;

  @Output() buttonClick = new EventEmitter<any>();

  constructor(private cartService: CartService) {}

  addToCart() {
    const item = {
      id: this.id,
      name: this.name,
      img: this.img,
      price: this.price,
      quantity: 1,
      total: this.price,
    };
    this.cartService.addToCart(item);
  }

  clickButton() {
    this.buttonClick.emit();
    console.log('Button clicked for item:', this.id);
  }
}
