import { Component, OnInit } from "@angular/core";
import { Iproduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['/product-list.component.css'],
  providers:[ProductService]
})


export class ProductListComponent implements OnInit{
  pageTitle: string ='Products List !';
  imageWidth=50;
  imageMargin=2;
  showImage: boolean= false;
  //ListFilter :string ='card';

  private _ListFilter: string='';

  get ListFilter(){
    return this._ListFilter;
  }
  set ListFilter(value : string){
    this._ListFilter;
    console.log('in setter : ', value);
    this.filterProducts=this.performFilter(value);
    }
    filterProducts : Iproduct[] =[];



  products: Iproduct[] =[

  ];
  constructor(private productService: ProductService){}
  performFilter(filterBy: string): Iproduct[]{
    filterBy= filterBy.toLocaleLowerCase();
    return this.products.filter((product: Iproduct) =>
    product.productName.toLocaleLowerCase().includes(filterBy));
  }
  toggleImage() :void{

    this.showImage=!this.showImage;
  }
  ngOnInit(): void {
    console.log('In OnInit')
    this.products= this.productService.getProducts(),
    this.filterProducts=this.products;


  }



}
