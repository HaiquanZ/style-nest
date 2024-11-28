import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clothing-item',
  templateUrl: './clothing-item.component.html',
  styleUrls: ['./clothing-item.component.scss']
})
export class ClothingItemComponent {
  @Input() data!: any;

  colorList: any = [];
  colorSelected: any;
  img: string = '';

  constructor(){}

  ngOnInit(){
    console.log(this.data);
    this.data.models.forEach((item: any) => {
      if(!this.colorList.includes(item.color))
      this.colorList.push(item.color);
    });
    this.colorSelected = this.colorList[0];
    this.img = 'http://vkl.vinhdd.io.vn:8080/images/' + this.data.images[0]
  }
}
