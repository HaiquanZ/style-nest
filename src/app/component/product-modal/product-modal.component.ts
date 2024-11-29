import { Component } from '@angular/core';
import { AbstractControl, NonNullableFormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent {
  private destroy$ = new Subject<void>();
  validateForm = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    price: this.fb.control('', [Validators.required, Validators.min(0)]),
    stock: this.fb.control('', [Validators.required, Validators.min(0)]),
    nickname: this.fb.control('', [Validators.required]),
    phoneNumberPrefix: this.fb.control<'+86' | '+87'>('+86'),
    phoneNumber: this.fb.control('', [Validators.required]),
    website: this.fb.control('', [Validators.required]),
    captcha: this.fb.control('', [Validators.required]),
    agree: this.fb.control(false)
  });
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
