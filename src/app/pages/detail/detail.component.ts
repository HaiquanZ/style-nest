import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/app/services/enviroment';
import { ProductService } from 'src/app/services/product.service';

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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idProduct = params.get('id');
    })
    this.productService.getDetailProduct(this.idProduct, 
      (res: any) => {
        if(res){
          this.productInfo = res.data;
          this.loading = false;
          res.data.images.forEach((item: string) => {
            this.listImgaeProduct.push('http://vkl.vinhdd.io.vn:8080/' + 'images/' +item);
          });
          // console.log(this.listImgaeProduct);
          this.imageSelected = this.listImgaeProduct[0];
          res.data.models.forEach((item: any) => {
            if(!this.colorList.includes(item.color))
            this.colorList.push(item.color);
          })
          this.colorSelected = this.colorList[0];
          // console.log(this.productInfo);
        }
      }
    )
  }

  changeIdModel(){
    this.productInfo.models.forEach((item: any) => {
      if(item.size == this.sizeSelected && item.color == this.colorSelected){
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

  addProductToCart(){
    if(localStorage.getItem('token')){
      
    }
  }
}
