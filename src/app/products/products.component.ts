import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit  {
  wishlist:any;
  wishlistStatus=''
  constructor(private api:ApiService){


  }
  ngOnInit(): void {
      this.api.getwishlist().subscribe(
        (result:any)=>{
          this.wishlist=result.wishlist
        },
        (result:any)=>{
          this.wishlistStatus=result.error.message
        }
      )
  }

}
