import { Component } from '@angular/core';
import {CartService} from "../services/cart/cart.service";
import {Cart} from "../shared/modules/Cart";
import {CartItem} from "../shared/modules/CartItem";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!: Cart
  constructor(private cartService: CartService) {
  }
  removeFromCart(cartItem:CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString)
    this.cartService.changeQuantity(cartItem.food.id, quantity)
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }

}
