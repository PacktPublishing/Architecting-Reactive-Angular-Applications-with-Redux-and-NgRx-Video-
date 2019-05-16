import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    component: AboutComponent,
    path: "about"
  },
  {
    component: ProductsComponent,
    path: "products"
  },
  {
    component: ProductDetailComponent,
    path: "products/:id"
  },
  {
    component: HomeComponent,
    path: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
