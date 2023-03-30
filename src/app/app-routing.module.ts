import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';

const routes: Routes = [
  //lazy loaded products module
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
//redirect to all products page when load the app
,{path:'' , redirectTo:'products',pathMatch:'full'},
//path for page not found
{path:'**', component:PageNotFountComponent}];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
