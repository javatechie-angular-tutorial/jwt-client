import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { AuthRequest } from './authRequest';


@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  //user: AuthRequest = new AuthRequest("", "");
  response: any;

  user: AuthRequest = {
    "userName": "javatechie",
    "password": "password"
  };
  constructor(private restService:RestService) { }

  ngOnInit() {
  this.authenticate();
  }
  public authenticate() {
    console.log("User : "+JSON.stringify(this.user));
    let resp = this.restService.generateToken(this.user);
    resp.subscribe(data => this.welcome(data));

  }

  public welcome(token){
    this.restService.welcome(token).subscribe(result=>this.response=result)
  }
}
