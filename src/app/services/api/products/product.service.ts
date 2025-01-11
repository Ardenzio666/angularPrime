import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ModelRepresentation} from "../models/model-representation";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://fakerestapi.azurewebsites.net/api/v1/Activities';

  constructor(
    private http:HttpClient
  ) { }

  getAllProducts(): Observable<any> {
    return this.http.get<Array<ModelRepresentation>>(this.baseUrl);
  }

  createProduct(product: ModelRepresentation) {
    return this.http.post<ModelRepresentation>(this.baseUrl, product);
  }
}
