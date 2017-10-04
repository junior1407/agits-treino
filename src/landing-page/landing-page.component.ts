import { Component,OnInit } from '@angular/core';
import{ Http,Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'landing-page',
 templateUrl: './landing-page.component.html',
// template : `oi`,
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
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
