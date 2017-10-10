import { Component,OnInit } from '@angular/core';
import{ Http,Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'menu',
 templateUrl: './menu.component.html',
// template : `<head-principal></head-principal> OI eu sou o menu<br> <a routerLink="/criacaotutor"> criar tutor</a>`,
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  title = 'app';
  constructor(private http:Http)
  {
    console.log("EU FUI ABERTO");
  }
  toggleSidenav()
  {
    console.log("fiz nada");
  }
}
