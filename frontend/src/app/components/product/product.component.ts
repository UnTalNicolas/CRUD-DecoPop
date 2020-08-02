import { Component, OnInit } from '@angular/core';
import { productService } from'../../service/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [productService]
})
export class ProductComponent implements OnInit {

  public allProduct: [];
  public dataProduct: [];
  public idProduct;
  public path;
  public find;

  constructor( 
    private _service: productService,
    private _routerParams: ActivatedRoute,
    private _router: Router
    ) {

   }

  ngOnInit(): void {

    this.path = this._routerParams.snapshot.url[0].path;
    this.find = this._routerParams.snapshot.url;

    if(this.path == 'delete-product'){
      this.idProduct = this._routerParams.snapshot.paramMap.get('id');
      this.deleteProduct();
    }else{
      this.showAllProduts();
    }

    if(this.path == 'filter-product'){
      console.log (this.find)
    }else{
      this.showAllProduts();
    }

  }

  showAllProduts(){
    this._service.getAllProduct().subscribe((res: any)=>{
      if(res.statusCode == 200){
        this.allProduct = res.listProduct;
      }else{
        console.log(Error);
      }
    })
  }

  searchProduct(event){
    let productName = event.target.value;
    if(productName.length == 0){
      productName = '-';
    }

    this._service.findProductName(productName).subscribe((res: any)=>{
      if (res.statusCode == 200){
        this.dataProduct = res.searchProduct
      }else{
        console.log('error x00049')
      }
    })
  }

  deleteProduct(){
    this._service.removeProduct(this.idProduct).subscribe((res: any)=>{
      if(res.statusCode == 200){
        alert(res.message);
        this._router.navigate(['list-product']);
      }else{
        console.log('error');
      }
    })
  }

}
