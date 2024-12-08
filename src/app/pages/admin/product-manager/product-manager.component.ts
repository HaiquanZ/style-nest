import { Component } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { DeleteProductComponent } from 'src/app/component/delete-product/delete-product.component';
import { ProductModalComponent } from 'src/app/component/product-modal/product-modal.component';
import { environment } from 'src/app/services/enviroment';
import { ProductService } from 'src/app/services/product.service';

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
  listOfData: ItemData[] = [];

  constructor(
    private modalService: NzModalService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.productService.getProductsByCategory('nu', (res: any) => {
      if (res) {
        this.listOfData = [];
        res.data.data.forEach((item: any) => {
          this.listOfData.push({
            id: item.id,
            name: item.name,
            image: environment.server.apiUrl + 'images/' + item.images[0],
            price: item.price,
            quantity: item.stock
          })
        });
        console.log(this.listOfData);
      }
    })
  }

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

  openModal(data: any) {
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'Tạo/ Chỉnh sửa sản phẩm',
      nzContent: ProductModalComponent,
      nzFooter: null,
      nzData: data,
      nzWidth: 800,
      nzCentered: true
    });
  }

  deleteModal(data: any) {
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'Xóa sản phẩm',
      nzContent: DeleteProductComponent,
      nzFooter: null,
      nzData: data,
      nzWidth: 500,
      nzCentered: true
    });

    this.modalRefAnt.afterClose.subscribe(status => {
      if (status) {
        this.getData();
      }
    })
  }
}
