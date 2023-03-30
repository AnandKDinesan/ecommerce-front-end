import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit{
  productId:any;
  viewProduct:any;
constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private Cart:CartService){

}
ngOnInit(): void {
  //fetch path parameter from url
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data['id']);
      this.productId=data['id']
      
    })

    this.api.viewProduct(this.productId).subscribe((result:any)=>{
      console.log(result.product);
      this.viewProduct=result.product
      console.log(this.viewProduct);
      

      
    })
}
addtowishlist(product:any){
  this.api.addtowishlist(product).subscribe(
    (result:any)=>{
      alert(result.message)
    },
    (result:any)=>{
      alert(result.error.message)
      
      
    }
  )
}
//addtocart
addToCart(Product:any){
   this.Cart.addToCart(Product)
}
}
