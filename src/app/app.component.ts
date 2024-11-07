import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { LoginComponent } from './component/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'style-nest';
  offsetTop = 0;
  visible = false;
  modalRefAnt?: NzModalRef;
  isAdmin: string = '';

  constructor(private router: Router, private modalService: NzModalService) { 
    this.isAdmin = String(localStorage.getItem('isAdmin'));
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  pay() {
    this.close();
    this.router.navigate(['/payment']);
  }

  handleClickAccount(){
    let token = localStorage.getItem('token');
    console.log(token);
    if(token){
      this.router.navigate(['/account']);
    }else{
      this.openLoginModal();
    }
  }

  openLoginModal(){
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'Đăng nhập',
      nzContent: LoginComponent,
      nzFooter: null,
      nzData: null,
      nzWidth: 500,
      nzCentered: true
    });
  }
}
