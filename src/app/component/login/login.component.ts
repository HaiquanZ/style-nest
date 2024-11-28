import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLogin = true;

  constructor(
    private modal: NzModalRef<LoginComponent>,
    private fb: NonNullableFormBuilder,
    private userService: UserService,
    private notification: NzNotificationService
  ) { }

  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      let data = {
        username: this.validateForm.value.userName,
        password: this.validateForm.value.password
      }
      if (this.isLogin) {
        this.userService.login(data, (res: any) => {
          if (res) {
            localStorage.setItem('token', res.data.token);
            this.close();

            this.notification
              .blank(
                'Đăng nhập thành công!',
                'Bạn đã đăng nhập thành công.'
              )
              .onClick.subscribe(() => {
                console.log('notification clicked!');
              });
          } else {
            this.notification
              .blank(
                'Đăng nhập thất bại!',
                'Sai thông tin đăng nhập.'
              )
              .onClick.subscribe(() => {
                console.log('notification clicked!');
              });
          }
        });
      } else {
        this.userService.register(data, (res: any) => {
          if (res) {
            this.isLogin = !this.isLogin;
            this.validateForm.reset();
            this.notification
              .blank(
                'Đăng ký thành công!',
                'Đăng nhập để tiếp tục.'
              )
              .onClick.subscribe(() => {
                console.log('notification clicked!');
              });
          } else {
            this.notification
              .blank(
                'Đăng ký thất bại!',
                'Tên người dùng đã tồn tại.'
              )
              .onClick.subscribe(() => {
                console.log('notification clicked!');
              });
          }
        })
      }
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  changeType() {
    this.isLogin = !this.isLogin;
  }

  close() {
    this.modal.close();
  }
}
