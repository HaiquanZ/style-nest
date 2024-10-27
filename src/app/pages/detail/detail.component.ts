import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  listImgaeProduct = [
    'https://canifa.com/img/1517/2000/resize/2/l/2ls24w001-sb001-3.webp',
    'https://canifa.com/img/1517/2000/resize/2/l/2ls24w001-sb001-128-1-ghep-u.webp',
    'https://canifa.com/img/1517/2000/resize/2/l/2ls24w001-sb001-128-2.webp',
    'https://canifa.com/img/1517/2000/resize/2/l/2ls24w001-sb001-2.webp',
    'https://canifa.com/img/1517/2000/resize/2/l/2ls24w001-sr072-128-1-ghep-u.webp'
  ];
  colorList = [
    '#7AA6A0', '#EEE2D6', '#212026', '#DE553D'
  ];
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

  imageSelected = this.listImgaeProduct[0];
  sizeSelected = 'XS';
  colorSelected = this.colorList[0];

  isShow = false;

  showSizeModal() {
    this.isShow = true;
  }

  handleOK() {
    this.isShow = false;
  }

  changeImage(image: string) {
    this.imageSelected = image;
  }
}
