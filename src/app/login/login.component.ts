import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../service/database.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="  LOGIN" //string interpolation(giving this data to the html page)
  acno = "Enter the account number!";//property interpolation
  pswd = "";
  myimage:string="assets/IMAGES/IMAGE.png"
  
  constructor(private router:Router,private data:DatabaseService) { }

  ngOnInit(): void {
  }
  // changeaccountno(event: any) {
  //   this.acno = event.target.value;

  // }
  // changePassword(event: any) {
  //   this.pswd = event.target.value;

  // }
  login() {
    var acno=this.acno;
    var pswd=this.pswd;
    var result=this.data.login(acno,pswd);
    if(result){
      this.router.navigateByUrl("dashboard")
    }
   
   
  
  }
}
