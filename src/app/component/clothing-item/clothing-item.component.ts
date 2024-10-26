import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clothing-item',
  templateUrl: './clothing-item.component.html',
  styleUrls: ['./clothing-item.component.scss']
})
export class ClothingItemComponent {
  @Input() data!: any;

  colorList = [
    '#7AA6A0', '#EEE2D6', '#212026', '#DE553D'
  ];

  colorSelected: any;
}
