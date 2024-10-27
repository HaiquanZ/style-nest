import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'style-nest';
  offsetTop = 0;
  visible = false;

  constructor(private router: Router){}

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
    this.router.navigate(['/payment']);
  }
}
