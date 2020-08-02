import { Component, OnInit } from '@angular/core';
import { userService } from '../../service/user.service';
import { templateLogin } from '../../models/users'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userMod: templateLogin;
  public path;

  constructor( 
    private _service: userService,
    private _routerParams: ActivatedRoute
  ) { 
    this.userMod = new templateLogin();
  }

  ngOnInit(): void {
    console.log(this._routerParams.snapshot.url)

  }

  login(){
    console.log('usted esta en controlador login')
    this._service.loginService(this.userMod).subscribe( (res: any)=>{
      switch( res.statusCode){
        case 204: 
          alert('Los datos no coinciden');
          break;
        case 200:
          alert('Bienvenido usuario');
          break;
        case 400:
          alert('El usuario no existe');
          break;
        default:
          alert('Ocurrio un error');
      }
    })
  }

}
