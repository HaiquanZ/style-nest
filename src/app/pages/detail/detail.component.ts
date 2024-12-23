import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { environment } from 'src/app/services/enviroment';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  productInfo: any;
  idProduct: any;
  loading: boolean = true;
  imageSelected = '';
  colorSelected = '';
  listImgaeProduct: any = [];
  colorList: any = [];
  sizeSelected = 'XS';
  isShow = false;
  idModel: string = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private notification: NzNotificationService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idProduct = params.get('id');
    })
    this.productService.getDetailProduct(this.idProduct,
      (res: any) => {
        if (res) {
          this.productInfo = res.data;
          console.log(this.productInfo);
          this.loading = false;
          res.data.images.forEach((item: string) => {
            this.listImgaeProduct.push(environment.server.apiUrl + 'images/' + item);
          });
          // console.log(this.listImgaeProduct);
          this.imageSelected = this.listImgaeProduct[0];
          res.data.models.forEach((item: any) => {
            if (!this.colorList.includes(item.color))
              this.colorList.push(item.color);
          })
          this.colorSelected = this.colorList[0];
          this.sizeSelected = 'S';
          this.changeIdModel();
          // console.log(this.productInfo);
        }
      }
    )
  }

  changeIdModel() {
    this.productInfo.models.forEach((item: any) => {
      if (item.size == this.sizeSelected && item.color == this.colorSelected) {
        this.idModel = item.id;
        console.log(this.idModel);
      }
    })
  }

  listOfData = [
    {
      key: '1',
      name: 'XS (26)',
      height: '147-153',
      weight: '38-43'
    },
    {
      key: '2',
      name: 'S (27)',
      height: '150-155',
      weight: '41-46'
    },
    {
      key: '3',
      name: 'M (28)',
      height: '155-163',
      weight: '47-52'
    },
    {
      key: '4',
      name: 'L (29)',
      height: '160-165',
      weight: '53-58'
    },
    {
      key: '5',
      name: 'XL (30)',
      height: '162-166',
      weight: '59-64'
    }
  ];

  showSizeModal() {
    this.isShow = true;
  }

  handleOK() {
    this.isShow = false;
  }

  changeImage(image: string) {
    this.imageSelected = image;
  }

  addProductToCart() {
    let storedArray = JSON.parse(localStorage.getItem('cart') || '[]');
    storedArray.push({
      modelId: this.idModel,
      name: this.productInfo.name,
      img: environment.server.apiUrl + 'images/' + this.productInfo.images[0],
      quantity: 1
    });

    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(storedArray));

    if (localStorage.getItem('token')) {
      this.userService.addtoCart({
        items: { [this.idModel]: 1 }
      }, (res: any) => {
        if(res){
          console.log(res);
        }
      })
    }

    this.notification
      .blank(
        'Thêm vào giỏ hàng thành công!',
        'Bạn đã thêm sản phẩm vào giỏ hàng.'
      )
      .onClick.subscribe(() => {
        console.log('notification clicked!');
      });
  }
}
