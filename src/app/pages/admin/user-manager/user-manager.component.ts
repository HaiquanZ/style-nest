import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AdminService } from 'src/app/services/admin.service';

interface ItemData {
  name: string;
  username: string;
  order: number;
}

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent {
  listOfColumn = [
    {
      title: 'Tên người dùng',
      compare: (a: ItemData, b: ItemData) => a.name.localeCompare(b.name),
      priority: false
    },
    {
      title: 'Tên đăng nhập',
      compare: (a: ItemData, b: ItemData) => a.username.localeCompare(b.username),
      priority: 3
    },
    {
      title: 'Đơn hàng',
      compare: (a: ItemData, b: ItemData) => a.order - b.order,
      priority: 2
    }
  ];
  listOfData: ItemData[] = [
    {
      name: 'John Brown2',
      username: 'adasdsdd',
      order: 60,
    },
    {
      name: 'John Brown',
      username: 'adasdsdd',
      order: 60,
    },
    {
      name: 'John Brown',
      username: 'adasdsdd',
      order: 60,
    },
    {
      name: 'John Brown',
      username: 'adasdsdd',
      order: 60,
    }
  ];

  constructor(
    private adminService: AdminService
  ){}

  ngOnInit(){
    this.adminService.getListUses({
      page: 0,
      pageSize: 100
    }, (res: any) => {
      this.listOfData = [];
      if(res){
        res.data.data.forEach((item: any) => {
          this.listOfData.push({
            name: item.username,
            username: item.username,
            order: Math.floor(Math.random() * (100 - 0 + 1)) + 0
          })
        })
      }
    })
  }
}
