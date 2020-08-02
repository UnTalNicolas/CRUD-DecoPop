import { Component, OnInit } from '@angular/core';
import { Product } from'../../models/products';
import { productService } from'../../service/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
  providers: [productService]
})

export class AddproductComponent implements OnInit {

  public product: Product;

  constructor( private _service: productService,) { 
    this.product = new Product('','','','',0);
  }

  ngOnInit(): void {
  }

  newProductAdd(form){
    
    console.log(this.product)
    this._service.saveProduct(this.product).subscribe( 
      Response =>{
        console.log(Response);
        alert(Response.message);
      },
      Error=>{
        console.log(Error);
      }
    )
  }

}
