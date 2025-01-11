import {Component, Input} from '@angular/core';
import {ModelRepresentation} from "../services/api/models/model-representation";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  @Input()
  product: ModelRepresentation = {};
}
