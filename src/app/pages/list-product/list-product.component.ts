import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  categorySelected: string = 'nu';
  typeSelected: string = 'Tất cả';
  listProduct: any = [];
  listCategory: string = 'nu';
  isSpinning: boolean = true;

  constructor(
    private productService: ProductService,
    private router: Router
  ){}

  ngOnInit(){
    // this.productService.getCategory((res: any) => {
    //   if(res){
    //     this.listCategory = res.data;
    //   }
    // });
    this.getData();
  }

  getData(){
    this.isSpinning = true;
    this.productService.getProductsByCategory(this.categorySelected, (res: any) => {
      if(res){
        console.log(res);
        this.listProduct = res.data.data;
        this.isSpinning = false;
      }
    })
  }

  showDetail(id: any){
    this.router.navigate([`/detail/${id}`])
  }
}
