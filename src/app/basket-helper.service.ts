import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { Product } from "./Models/product";
import { AddProductToBasket } from "./shared/actions/productAction";
import { ProductState } from "./shared/states/ProductState";

@Injectable()
export class BasketHelperService {
  constructor(private store: Store) {}

  private listProducts$: Observable<Product[]>;

  public addProductToBasket(product: Product) {
    this.store.dispatch(new AddProductToBasket(product));
    this.helpDebug();
  }

  private helpDebug() {
    this.listProducts$ = this.store.select(ProductState.getProductsInBasket);
    this.listProducts$.subscribe(res => console.log(res));
  }
}
