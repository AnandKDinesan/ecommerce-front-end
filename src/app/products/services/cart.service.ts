import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartItemList=new BehaviorSubject([])
cartItemArry:any=[]
  constructor() { }

  addToCart(product:any){
    this.cartItemArry.push(product)
    this.cartItemList.next(this.cartItemArry)
    console.log(this.cartItemList);
    this.grantTotal()
  }
  //grandtotal
  grantTotal(){
    let total=0
    this.cartItemArry.map((item:any)=>{
      total+=item.price
      console.log(total);
      
    })
    return total
  }
  //remove a particular item from cart
  removeCartItem(product:any){
    this.cartItemArry.map((item:any,index:any)=>{
      if(product.id==item.id)
      {
        this.cartItemArry.splice(index,1)
      }
    })
    this.cartItemList.next(this.cartItemArry)
  }
//empty cart
emptyCart(){
  this.cartItemArry=[]
  this.cartItemList.next(this.cartItemArry)
}
}

