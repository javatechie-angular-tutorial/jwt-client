import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthRequest } from './security/authRequest';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  public generateToken(user: AuthRequest) {
   return this.http.post("http://localhost:9191/authenticate", user, { responseType: 'text' as 'json' });   
 }
  
  public welcome(token: Object) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<string>("http://localhost:9191/", { headers, responseType: 'text' as 'json' });
  }

}
