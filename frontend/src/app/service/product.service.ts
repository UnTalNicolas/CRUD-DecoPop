import{ Injectable } from'@angular/core';
import{ HttpClient, HttpHeaders, HttpClientModule } from'@angular/common/http';
import { Product } from'../models/products';
import { Global } from './global';
import { Observable, from } from 'rxjs';


@Injectable()

export class productService{

        public url: String;
        header = new HttpHeaders().set('Content-type', 'application/json');

        constructor(private _http:HttpClient){
            this.url = Global.url
        }

        test(){
            return 'Funciona el Servcio'
        }

        saveProduct(product: Product) : Observable<any>{
            let params = JSON.stringify(product);            
            return this._http.post(this.url+'show', params, {headers:this.header})
        }

        getAllProduct(){
            return this._http.get(
                this.url+'find-student',
                {headers:this.header}
            )
        }

        modifyProduct(productParams){
            const params = JSON.stringify(productParams);
            return this._http.put(
                `${this.url}${productParams._id}`,
                params,
                {headers:this.header}
            )
        }

        oneShowProduct(idPoduct){
            return this._http.get(
                `${this.url}${idPoduct}`,
                {headers:this.header}
            )
        }

        removeProduct(idPoduct){
            return this._http.delete(
                `${this.url}${idPoduct}`,
                {headers:this.header}
            )
        }

        findProductName(name){
            return this._http.get(
                `${this.url}searchName/${name}`,
                {headers:this.header}
            )
        }
}