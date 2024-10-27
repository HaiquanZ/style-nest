import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      city: [null, [Validators.required]],
      district: [null, [Validators.required]],
      ward: [null, [Validators.required]],
      address: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('Form Submitted!', this.validateForm.value);
    } else {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }
}
