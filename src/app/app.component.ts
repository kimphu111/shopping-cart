import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartService } from './components/services/cart.service';
// import { CardComponent } from './components/card/card.component';
import { NavComponent } from './components/navbar/nav/nav.component';
import { MatButton } from '@angular/material/button';
import { AuthService } from './components/services/auth.service';
import { ListProductComponent } from './components/pages/list-product/list-product.component';
import { ProductCardComponent } from './components/card/card.component';
import { CurrencyPipe } from '@angular/common';

// let ProductCardComponent = class ProductCardComponent {;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // CardComponent,
    NavComponent,
    MatButton,
    ListProductComponent,
    ProductCardComponent,
    CurrencyPipe,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'first web shopping cart';
  isHomePage: any;

  constructor(
    public cartService: CartService,
    public authService: AuthService,
  ) {
    //console.log(this.authService.login());
  }

  deleteItem(index: number) {
    this.cartService.removeFromCart(index);
  }

  addToCart() {}
}

export class AppRoutingModule {}
