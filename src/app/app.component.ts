import { Component,OnInit } from '@angular/core';
import{ Http,Response} from "@angular/http";
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  myData: any={};
  constructor(private http:Http)
  {
  }

  ngOnInit
  ()
  {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .map((res:Response) => res.json())
    .subscribe(data =>{this.myData = data; })

   // this.http.get('https://jsonplaceholder.typicode.com/posts')
    //.map((res: Response) => res.json())
   // .subscribe(res => {this.myData = res; 
    //console.log(res);
                    
 // });


  }
}
