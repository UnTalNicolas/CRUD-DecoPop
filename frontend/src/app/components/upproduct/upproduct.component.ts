import { Component, OnInit } from '@angular/core';
import { Product } from'../../models/products';
import { productService } from'../../service/product.service';
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-upproduct',
  templateUrl: './upproduct.component.html',
  styleUrls: ['./upproduct.component.css']
})
export class UpproductComponent implements OnInit {

  public product: Product;
  public idProduct;

  constructor(
    private _service:productService, 
    private _routerParams: ActivatedRoute,
    private _router: Router
    ) {    }

  ngOnInit(): void {
    this.idProduct = this._routerParams.snapshot.paramMap.get('id');
    let idShow = this.idProduct;
    this.oneDataProduct(idShow);
  }

  updateProduct(){
    this._service.modifyProduct(this.product).subscribe((res: any)=>{
      if(res.statusCode == 200){
        alert(res.message);
        this._router.navigate(['list-product']);
      }else{
        console.log('Error')
      }
    })
  }

  oneDataProduct(idShow){
    console.log('este es el id a enviar -->', idShow);
    this._service.oneShowProduct(idShow).subscribe((res: any)=>{
       this.product = res.oneProduct
    })
  }

}
