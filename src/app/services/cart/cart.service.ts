import { Injectable } from '@angular/core';
import {Cart} from "../../shared/modules/Cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart()
  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if(cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food);
  }
}
