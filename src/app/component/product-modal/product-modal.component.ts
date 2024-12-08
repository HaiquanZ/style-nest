import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, NonNullableFormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { filter, Subject, takeUntil } from 'rxjs';
import { environment } from 'src/app/services/enviroment';
import { ProductService } from 'src/app/services/product.service';

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
    description: this.fb.control('', [Validators.required]),
    instruction: this.fb.control('', [Validators.required]),
    materials: this.fb.control('', [Validators.required]),
    categoryId: this.fb.control('nu', [Validators.required]),
  });
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  modelList: any[] = [];
  formData = new FormData();

  constructor(
    private fb: NonNullableFormBuilder,
    private productService: ProductService,
    private notification: NzNotificationService,
    private modal: NzModalRef<ProductModalComponent>,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      let data = {
        name: this.validateForm.value.name,
        stock: this.validateForm.value.stock,
        price: this.validateForm.value.price,
        description: this.validateForm.value.description,
        instruction: this.validateForm.value.instruction,
        materials: this.validateForm.value.materials,
        models: this.modelList,
        categoryId: this.validateForm.value.categoryId
      };

      this.formData.append('data', JSON.stringify(data));
      console.log(this.formData);
      this.upload();
      // this.productService.createProduct(this.formData, (res: any) => {
      //   if(res){
      //     console.log(res);
      //   }
      // })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  addModel(){
    this.modelList.push({
      stock: 0,
      color: '',
      size: 'XS'
    })
  }

  handleChange(e: any, colorCode: string){
    if (this.formData.has(colorCode)) {
      this.formData.delete(colorCode);
    }
    console.log(e);
    this.formData.append(colorCode, e.fileList[0].originFileObj);
    let index = 0;
    this.formData.forEach((value, key) => {
      console.log(index++);
      console.log(key, " ------------ ", value);
    });
  }

  beforeUpload(e: any, colorCode: string){
    // this.formData.append(colorCode, e);
    // let index = 0;
    // this.formData.forEach((value, key) => {
    //   console.log(index++);
    //   console.log(key, " ------------ ", value);
    // });
    // return false;
  }

  upload(){
    let url = environment.path.product.CREATE_PRODUCT;

    const req = new HttpRequest('POST', url, this.formData, {
      // reportProgress: true
    });
    this.http
      .request(req)
      .pipe(filter(e => e instanceof HttpResponse))
      .subscribe(
        (e: any) => {
          console.log(e)
          this.modal.close(true);
        },
        () => {
          console.log('error');
          this.modal.close();
        }
      );
  }
}
