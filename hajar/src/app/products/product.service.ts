import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Iproduct } from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  private productUrl='api/products/product.json';
  constructor(private http: HttpClient ){}
  getProducts() : Iproduct[]{
    return[
      {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2021",
        "description": "15 gallon capacity",
        "price": 23.99,
        "starRating":4.2,
        "imageUrl": "assets/images/send.jpeg"

      },
      {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "tbx-0023",
        "releaseDate": "May 18, 2021",
        "description": "15 gallon capacity",
        "price": 8.99,
        "starRating":4.9,
        "imageUrl": "assets/images/send.jpeg"
      },
    ]
  }

}
