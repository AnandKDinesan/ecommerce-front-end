import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  wishlist:any;
  wishlistStatusMsg=''
  constructor(private api:ApiService,private Cart:CartService){


  }
  ngOnInit(): void {
      this.api.getwishlist().subscribe(
        (result:any)=>{
          this.wishlist=result.wishlist
          if(this.wishlist.length==0){
            this.wishlistStatusMsg='wishlist empty'
          }
        },
        (result:any)=>{
          this.wishlistStatusMsg='wishlist empty'
        }
      )
  }
  removeItem(productId:any){
    this.api.removeItemFromWishlist(productId).subscribe(
      //200
      (result:any)=>{
        this.wishlist=result.wishlist
        if(this.wishlist.length==0){
          this.wishlistStatusMsg='wishlist empty'
        }
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  } 
//add to cart
addToCart(product:any){
  this.Cart.addToCart(product)
  this.removeItem(product.id)
}
}
