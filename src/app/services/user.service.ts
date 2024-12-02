import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './enviroment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public isAdmin = new BehaviorSubject<boolean>(false);
  data$ = this.isAdmin.asObservable();

  updateRole(newData: boolean) {
    this.isAdmin.next(newData);
  }

  login(data: any, callBack: Function): any{
    this.http.post(environment.path.auth.LOGIN, data, { observe: 'response' }).subscribe(
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

  register(data: any, callBack: Function): any{
    this.http.post(environment.path.auth.REGISTER, data, { observe: 'response' }).subscribe(
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

  getCart(): any{
    this.http.get(environment.path.auth.GET_CART, { observe: 'response' }).subscribe(
      (response: any) => {
        if(response.body){
          console.log(response.body);
          localStorage.setItem('cart', JSON.stringify(response.body.data))
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  addtoCart(data: any, callBack: Function): any{
    this.http.post(environment.path.auth.ADD_CART, data, { observe: 'response' }).subscribe(
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
