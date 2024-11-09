import { Component } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { DeleteProductComponent } from 'src/app/component/delete-product/delete-product.component';
import { ProductModalComponent } from 'src/app/component/product-modal/product-modal.component';

interface ItemData {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent {
  modalRefAnt?: NzModalRef;
  constructor(private modalService: NzModalService){}
  listOfColumn = [
    {
      title: 'Mã sản phẩm',
      compare: (a: ItemData, b: ItemData) => a.name.localeCompare(b.name),
      priority: false
    },
    {
      title: 'Tên sản phẩm',
      compare: (a: ItemData, b: ItemData) => a.name.localeCompare(b.name),
      priority: 3
    },
    {
      title: 'Hình ảnh',
      compare: (a: ItemData, b: ItemData) => a.image.localeCompare(b.image),
      priority: 2
    },
    {
      title: 'Giá',
      compare: (a: ItemData, b: ItemData) => a.price - b.price,
      priority: 5
    },
    {
      title: 'Số lượng kho',
      compare: (a: ItemData, b: ItemData) => a.quantity - b.quantity,
      priority: 4
    }
  ];
  listOfData: ItemData[] = [
    {
      id: 'd0e9b364-4c69-46d8-9526-4903af2a4347',
      name: 'Bộ mặc nhà nam',
      image: 'https://canifa.com/img/1517/2000/resize/6/l/6ls24s009-cm076-thumb.webp',
      price: 1000000,
      quantity: 100
    },
    {
      id: 'd0e9b364-4c69-46d8-9526-4903af2a4347',
      name: 'Bộ mặc nhà nam',
      image: 'https://canifa.com/img/1517/2000/resize/6/l/6ls24s009-cm076-thumb.webp',
      price: 1000000,
      quantity: 100
    },
    {
      id: 'd0e9b364-4c69-46d8-9526-4903af2a4347',
      name: 'Bộ mặc nhà nam',
      image: 'https://canifa.com/img/1517/2000/resize/6/l/6ls24s009-cm076-thumb.webp',
      price: 1000000,
      quantity: 100
    },
    {
      id: 'd0e9b364-4c69-46d8-9526-4903af2a4347',
      name: 'Bộ mặc nhà nam',
      image: 'https://canifa.com/img/1517/2000/resize/6/l/6ls24s009-cm076-thumb.webp',
      price: 1000000,
      quantity: 100
    },
    {
      id: 'd0e9b364-4c69-46d8-9526-4903af2a4347',
      name: 'Bộ mặc nhà nam',
      image: 'https://canifa.com/img/1517/2000/resize/6/l/6ls24s009-cm076-thumb.webp',
      price: 1000000,
      quantity: 100
    },
    {
      id: 'd0e9b364-4c69-46d8-9526-4903af2a4347',
      name: 'Bộ mặc nhà nam',
      image: 'https://canifa.com/img/1517/2000/resize/6/l/6ls24s009-cm076-thumb.webp',
      price: 1000000,
      quantity: 100
    },
    {
      id: 'd0e9b364-4c69-46d8-9526-4903af2a4347',
      name: 'Bộ mặc nhà nam',
      image: 'https://canifa.com/img/1517/2000/resize/6/l/6ls24s009-cm076-thumb.webp',
      price: 1000000,
      quantity: 100
    }
  ];

  openModal(data: any){
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'Tạo/ Chỉnh sửa sản phẩm',
      nzContent: ProductModalComponent,
      nzFooter: null,
      nzData: data,
      nzWidth: 800,
      nzCentered: true
    });
  }

  deleteModal(data: any){
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'Xóa sản phẩm',
      nzContent: DeleteProductComponent,
      nzFooter: null,
      nzData: data,
      nzWidth: 500,
      nzCentered: true
    });
  }
}
