import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {
  listType = [
    'Áo phông', 'Áo Polo', 'Bộ mặc nhà', 'Chống nắng', 'Quần shorts', 'Quần Khaki', 'Quần Jeans', 'Quần lót nam', 'Áo', 'Quần', 'Đồ mặc ngoài', 'Đồ mặc trong', 'Phụ kiện', 'Đồ dùng cá nhân',
    'Váy liền thân', 'Áo Kiều', 'Đồ lót', 'Váy', 'Tất cả'
  ];

  categorySelected: string = 'tatca';
  typeSelected: string = 'Tất cả';
  listProduct: any = [];
  isSpinning: boolean = true;

  constructor(
    private productService: ProductService
  ){}

  ngOnInit(){
    this.productService.getProductsByCategory('nam', (res: any) => {
      if(res){
        console.log(res);
        this.listProduct = res.data;
        this.isSpinning = false;
      }
    })
  }
}
