import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  listProduct = [
    { id: 1, name: 'Áo kiểu nữ vải dệt họa tiết tay bồng', img: 'https://canifa.com/img/210/300/resize/6/t/6to24s001-sg618-thumb.webp', quantity: 2, price: 199500, size: 'M', color: '#C0C7A7' },
    { id: 1, name: 'Áo kiểu nữ vải dệt họa tiết tay bồng', img: 'https://canifa.com/img/210/300/resize/6/t/6to24s001-sg618-thumb.webp', quantity: 2, price: 199500, size: 'M', color: '#C0C7A7' },
    { id: 1, name: 'Áo kiểu nữ vải dệt họa tiết tay bồng', img: 'https://canifa.com/img/210/300/resize/6/t/6to24s001-sg618-thumb.webp', quantity: 2, price: 199500, size: 'M', color: '#C0C7A7' }
  ];

  total: number = 0;
  discount: number = -10000;

  constructor() {
    this.changeQuantity();
  }

  changeQuantity() {
    this.listProduct.map(product => {
      this.total += product.price;
    })
  }
}
