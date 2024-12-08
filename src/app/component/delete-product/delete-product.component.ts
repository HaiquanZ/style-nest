import { Component, Inject } from '@angular/core';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent {

  constructor(
    private productService: ProductService,
    private notification: NzNotificationService,
    private modal: NzModalRef<DeleteProductComponent>,
    @Inject(NZ_MODAL_DATA) public id: any
  ) { }


  delete() {
    this.productService.deleteProduct(this.id, (res: any) => {
      if (res) {
        this.notification
          .blank(
            'Xóa sản phẩm thành công!',
            'Đã xóa sản phẩm.'
          )
          .onClick.subscribe(() => {
            console.log('notification clicked!');
          });

        this.modal.close(true);
      }
    })
  }
}
