import { Component,OnInit, Input} from '@angular/core';
import { FormsModule, } from "@angular/forms";
import{MatDialog, MatDialogRef, MatDialogClose} from "@angular/material";
import {  UserLogin} from "../../model/user";
@Component({
  selector: 'login',
 templateUrl: './login.component.html',
 //template : `<input ty>`,
 styleUrls: ['./login.component.css']
})
export class LoginDialogComponent {
  title = 'app';
  x:string;
  @Input() user:UserLogin;
  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>) { }
  
    closeDialog() {
      console.log(this.user);
    }
}
