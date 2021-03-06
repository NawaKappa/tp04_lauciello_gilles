import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ProductApiService } from "./product-api.service";
import { HttpClientModule } from "@angular/common/http";
import { CatalogComponent } from "./catalog/catalog.component";
import { NgxsModule } from "@ngxs/store";
import { ProductState } from "./shared/states/ProductState";
import { BasketComponent } from "./basket/basket.component";
import { BasketHelperService } from "./basket-helper.service";
import { NavbarComponent } from "./navbar/navbar.component";
import { DetailComponent } from "./catalog/detail/detail.component";
import { RouterModule, Routes } from "@angular/router";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { UserInfoComponent } from "./client/user-info/user-info.component";
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: "catalog",
    loadChildren: () =>
      import("./catalog/catalog.module").then(m => m.CatalogModule)
  },
  {
    path: "basket",
    component: BasketComponent
  },
  {
    path: "client",
    loadChildren: () =>
      import("./client/client.module").then(m => m.ClientModule)
  },
  {
    path: "",
    component: HomepageComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot([ProductState]),
    NgxsStoragePluginModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    BasketComponent,
    NavbarComponent,
    HomepageComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProductApiService, BasketHelperService]
})
export class AppModule {}
