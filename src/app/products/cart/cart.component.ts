import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:any=[]
  grantTotal:number=0
  discount:number=0
  discountTotal:number=0
  checkoutMsg:any
constructor(private cart:CartService,private route:Router){

}
  ngOnInit(): void {
    this.cart.cartItemList.subscribe((data:any)=>{
        this.cartItems=data
    })
    let total=this.cart.grantTotal()
    this.grantTotal=Number(total.toFixed(2))
    this.discountTotal=this.grantTotal
  }
  removeItem(product:any){
    this.cart.removeCartItem(product)
    let total=this.cart.grantTotal()
    this.grantTotal=Number(total.toFixed(2))
    this.discountTotal=this.grantTotal
  }
  //empty cart
  emptyCart(){
    this.cart.emptyCart()
  }
  //discount
  discount3percent(){
    this.discount=this.grantTotal* 0.3
    Number(this.discount.toFixed(2))
    this.discountTotal-=this.discount
    // Number(this.discountTotal.toFixed(2))
  }

  discount10percent(){
    this.discount=this.grantTotal* 0.10
    Number(this.discount.toFixed(2))
    this.discountTotal-=this.discount
    // Number(this.discountTotal.toFixed(2))
  }

  discount15percent(){
    this.discount=this.grantTotal* 0.15
    Number(this.discount.toFixed(2))
    this.discountTotal-=this.discount
    // Number(this.discountTotal.toFixed(2))
  }
  order(){
    this.checkoutMsg='Order placed successfully!!'
    // alert('Order placed successfully!!')
    setTimeout(() => {
      this.emptyCart()
    this.route.navigateByUrl('')
    }, 5000);
    
  }
}
