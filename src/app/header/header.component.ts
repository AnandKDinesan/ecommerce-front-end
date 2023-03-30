import { Component, OnInit } from '@angular/core';
import { ApiService } from '../products/services/api.service';
import { CartService } from '../products/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItemCount:number=0
constructor(private api:ApiService,private Cart:CartService){

}
ngOnInit(): void {
    this.Cart.cartItemList.subscribe((data:any)=>{
      this.cartItemCount=data.length
    })
}
  search(event:any){
    let searchTerm=event.target.value
    this.api.searchKey.next(searchTerm)
    console.log(this.api.searchKey);
    
  }
  
}
