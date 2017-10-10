import { Component,OnInit } from '@angular/core';
import{ Http,Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'criacao-tutor',
 templateUrl: './criacao-tutor.component.html',
 //template : `  `,
  //styleUrls: ['./landing-page.component.css']
})
export class CriacaoTutorComponent {
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
