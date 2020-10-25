import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { BasketHelperService } from "../../basket-helper.service";
import { Product } from "../../Models/product";
import { ProductApiService } from "../../product-api.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: ProductApiService,
    private basketHelper: BasketHelperService
  ) {}

  product$: Observable<Product>;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params["id"];
      this.product$ = this.service.getProductById(id);
    });
  }

  onClickAddToBasket() {
    this.product$.subscribe(v => this.basketHelper.addProductToBasket(v));
  }
}
