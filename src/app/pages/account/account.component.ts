import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  personalForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.personalForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      gender: ['male', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.personalForm.valid) {
      console.log(this.personalForm.value);
    } else {
      console.log("Form không hợp lệ");
    }
  }
}
