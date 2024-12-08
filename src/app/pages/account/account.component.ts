import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  personalForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private notification: NzNotificationService,
    private userService: UserService
  ) {
    this.personalForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      gender: ['male', [Validators.required]]
    });
  }

  username: string = 'User Name';
  ngOnInit(){
    this.username = String(localStorage.getItem('username'))
  }

  onSubmit(): void {
    if (this.personalForm.valid) {
      console.log(this.personalForm.value);
    } else {
      console.log("Form không hợp lệ");
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
    this.userService.updateRole(false);
    this.notification
      .blank(
        'Đăng xuất thành công!',
        'Bạn đã đăng xuất thành công.'
      )
      .onClick.subscribe(() => {
        console.log('notification clicked!');
      });
  }
}
