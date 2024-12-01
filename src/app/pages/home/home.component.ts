import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  array = [
    { 
      id: 1,
      img: 'https://media.canifa.com/Simiconnector/BannerSlider/s/p/spmoi_topbanner_desktop-17oct.webp'
    },
    { 
      id: 2,
      img: 'https://media.canifa.com/Simiconnector/BannerSlider/d/g/dgm_topbanner_desktop-21oct-ud.webp'
    },
    { 
      id: 3,
      img: 'https://media.canifa.com/Simiconnector/BannerSlider/c/n/cnfcamon_topbanner_desktop-16oct.webp'
    },
    { 
      id: 4,
      img: 'https://media.canifa.com/Simiconnector/BannerSlider/h/w/hw_topbanner_desktop-18.09.webp'
    },
  ];

  arrayCategory = [
    { 
      id: 1,
      img: 'https://media.canifa.com/Simiconnector/nu_spmoi-04Oct.webp'
    },
    { 
      id: 2,
      img: 'https://media.canifa.com/Simiconnector/nam_spmoi-04Oct.webp'
    },
    { 
      id: 3,
      img: 'https://media.canifa.com/Simiconnector/girl_spmoi-04Oct.webp'
    },
    { 
      id: 4,
      img: 'https://media.canifa.com/Simiconnector/boy_spmoi-04Oct.webp'
    },
  ];

  productListNu: any = [];

  constructor(
    private productService: ProductService,
    private router: Router,
  ){}

  ngOnInit(){
    this.productService.getProductsByCategory('nu', (res: any) => {
      if(res){
        this.productListNu = res.data.slice(0,8);
      }
    });
  }

  showDetailProduct(id: string){
    this.router.navigate([`/detail/${id}`]);
  }
}
