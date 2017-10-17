import { Component,OnInit } from '@angular/core';
import{ Http,Response} from "@angular/http";
import 'rxjs/add/operator/map';
import{MatDialog, MatDialogRef, MatDialogClose} from "@angular/material";
import{LoginDialogComponent} from "./login-dialog/login.component"
@Component({
  selector: 'landing-page',
 templateUrl: './landing-page.component.html',
// template : `oi`,
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  title = 'app';
  constructor(private http:Http, public dialog:MatDialog)
  {
    console.log("EU FUI ABERTO");
  }
  toggleSidenav()
  {
    console.log("fiz nada");
  }
  openModal()
  {
    let dialogRef = this.dialog.open(LoginDialogComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.beforeClose().subscribe(() => {

      dialogRef.close();
    });
    dialogRef.afterClosed().subscribe(() => {

      console.log("Fechei");
    });
  }
}
