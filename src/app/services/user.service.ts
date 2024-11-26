import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './enviroment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(id: string, callBack: Function): any{
    this.http.get(environment.path.auth.LOGIN, { observe: 'response' }).subscribe(
      (response: any) => {
        if(response.body){
          callBack(response.body);
        }
      },
      error => {
        if(callBack){
          console.log(error);
          callBack(null);
        }
      }
    )
  }
}
