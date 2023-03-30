import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { ViewComponentComponent } from './view-component/view-component.component';
import { WishListComponent } from './wish-list/wish-list.component';


const routes: Routes = [
  //AllProductsComponent
  { path: '', component: AllProductsComponent },
  //cart
  {path:'cart', component: CartComponent},
  //wishlist
  {path:'wishlist',component:WishListComponent},
  {path:'view-product/:id', component:ViewComponentComponent}
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
