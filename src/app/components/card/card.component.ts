import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../services/cart.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  get img(): any {
    return this._img;
  }

  set img(value: any) {
    this._img = value;
  }

  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() price!: number;
  @Input() inStock!: number;

  @Output() buttonClick = new EventEmitter<any>();
  private _img: any;

  constructor(private cartService: CartService) {}

  addToCart() {
    const item = {
      id: this.id,
      name: this.name,
      description: this.description,
      img: this._img,
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
