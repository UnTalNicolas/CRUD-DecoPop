import{ Injectable } from'@angular/core';
import{ HttpClient, HttpHeaders, HttpClientModule } from'@angular/common/http';
import { Global } from './global';
import { Observable, from } from 'rxjs';


@Injectable()

export class userService{

    public url: String;
    header = new HttpHeaders().set('Content-type', 'application/json');

    constructor(private _http:HttpClient){
            this.url = Global.url
        }


    loginService(userParams){
        let params = JSON.stringify(userParams);
        return this._http.post(
            `${this.url}/login`,
            params,
            {headers:this.header}
        )
    }
    
}