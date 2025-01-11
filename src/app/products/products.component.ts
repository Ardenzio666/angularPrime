import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/api/products/product.service";
import {ModelRepresentation} from "../services/api/models/model-representation";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  constructor(
    private service: ProductService
  ) {
  }

  products: ModelRepresentation[] = [];

  ngOnInit(): void {


    this.service.getAllProducts().subscribe({
      next: (data: ModelRepresentation[]) => {
        this.products = data;
      }
    });

  }
}
