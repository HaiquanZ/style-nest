import { Component } from '@angular/core';
import { environment } from 'src/app/services/enviroment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  listProduct: any[] = [];

  total: number = 0;
  discount: number = -10000;

  constructor() {
  }

  ngOnInit() {
    this.getDataFromLocal()
  }

  getDataFromLocal() {
    let storedArray = JSON.parse(localStorage.getItem('cart') || '[]');
    if (storedArray.length) {
      this.listProduct = [];
      storedArray.forEach((item: any) => {
        this.listProduct.push({
          id: item.modelId,
          name: item.model.product.name,
          img: environment.server.apiUrl + 'images/' + item.model.product.productFiles[0].file.name,
          quantity: item.quantity,
          price: item.model.product.price,
          size: item.model.size,
          color: item.model.color
        });
      });

      this.listProduct.map(product => {
        this.total += product.price;
      })
      console.log(this.listProduct);
      localStorage.setItem('total', String(this.total));
    }
  }

  changeQuantity(id: any, e : any) {
    let storedArray = JSON.parse(localStorage.getItem('cart') || '[]');
    for(let i = 0; i < storedArray.length; i++){
      if(storedArray[i].modelId == id ){
        if(e == 0){
          storedArray.splice(i,1);
          break;
        }
        storedArray[i].quantity = e;
      }
    }

    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(storedArray));
    this.getDataFromLocal();
  }
}
