import { Component } from '@angular/core';
import {ModelRepresentation} from "../services/api/models/model-representation";
import {ProductService} from "../services/api/products/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {

  constructor(
    private service: ProductService,
    private router: Router
  ) {
  }

  product: ModelRepresentation = {};

  saveProduct() {

    const formattedProduct = {
      ...this.product,
      dueDate: new Date(this.product.dueDate  + 'T00:00:00'), // Assicura formato ISO
    };

    this.service.createProduct(formattedProduct)
      .subscribe(
        {
          next: (result) => {
            this.router.navigate(['products'])
          },
          error: (error) => {
            console.error('Errore durante il salvataggio:', error);
            console.error('Dettagli errore:', error.error); // Logga la risposta del server
          },
        }
      );
  }


}
