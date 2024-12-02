import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  validateForm!: FormGroup;
  total: number = 0;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private notification: NzNotificationService,
    private router: Router
  ) {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      tel: [null, [Validators.required]],
      address: [null, [Validators.required]]
    });

    this.total = Number(localStorage.getItem('total'));
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      let items = {};
      let storedArray = JSON.parse(localStorage.getItem('cart') || '[]');
      for (let i = 0; i < storedArray.length; i++) {
        items = Object.assign(items, { [storedArray[i].modelId]: storedArray[i].quantity });
      };
      console.log(items)
      let data = {
        name: this.validateForm.value.name,
        tel: this.validateForm.value.tel,
        address: this.validateForm.value.address,
        items: items
      };

      this.productService.checkout(data, (res: any) => {
        if (res) {
          this.router.navigate(['/']);
          localStorage.removeItem('cart');
          localStorage.removeItem('total');
          console.log(res);
          this.notification
            .blank(
              'Đặt hàng thành công!',
              'Bạn đã đặt hàng thành công. Chú ý điện thoại trong 3-5 ngày tới!'
            )
            .onClick.subscribe(() => {
              console.log('notification clicked!');
            });
        }
      })
    } else {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }
}
