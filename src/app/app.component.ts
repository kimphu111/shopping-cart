import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartService } from './components/services/cart.service';
import { CardComponent } from './components/card/card.component';
import { NavComponent } from './components/navbar/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public cartService: CartService) {}

  title = 'demo';

  deleteItem(index: number) {
    this.cartService.removeFromCart(index);
  }
}

export class AppRoutingModule {}
