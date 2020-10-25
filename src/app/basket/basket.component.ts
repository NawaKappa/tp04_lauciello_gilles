import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import {
  AddProductToBasket,
  DelProductFromBasket
} from "../shared/actions/productAction";
import { BasketHelperService } from "../basket-helper.service";
import { Product } from "../Models/product";
import { ProductState } from "../shared/states/ProductState";

@Component({
  selector: "app-basket",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.css"]
})
export class BasketComponent implements OnInit {
  constructor(private store: Store) {}

  listProducts$: Observable<Product[]>;

  ngOnInit() {
    this.listProducts$ = this.store.select(ProductState.getProductsInBasket);
  }

  onClickDelFromBasket(product: Product) {
    this.store.dispatch(new DelProductFromBasket(product));
  }
}
