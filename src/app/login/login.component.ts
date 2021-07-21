import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
  users: any = {
    1000: { accountnumber: 1000, password:"userone", username:"riya", balance:10000 },
    1001: { accountnumber: 1001, password:"usertwo", username:"miya", balance:1500 },
    1002: { accountnumber: 1002, password:"userthree", username:"jiya", balance:17000 },
    1003: { accountnumber: 1003, password:"userfour", username:"liya", balance:1000 }
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  // changeaccountno(event: any) {
  //   this.acno = event.target.value;

  // }
  // changePassword(event: any) {
  //   this.pswd = event.target.value;

  // }
  login() {
    let accountno = this.acno;
    let password = this.pswd;
    let accountdetails = this.users
    if (accountno in accountdetails){
      if(password==accountdetails[accountno]["password"]){
        alert("success")
        this.router.navigateByUrl("dashboard")
      }
      else{
        alert("invalid password")
      }
    }
    else{
      alert("invalid accountnumber")
    }
   
  
}

}
