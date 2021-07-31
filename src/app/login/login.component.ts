import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../service/database.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "  LOGIN" //string interpolation(giving this data to the html page)
  acno = "Enter the account number!";//property interpolation
  pswd = "";
  myimage: string = "assets/IMAGES/IMAGE.png"
 
  loginform=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
  })

  constructor(private router: Router, private data: DatabaseService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  // changeaccountno(event: any) {
  //   this.acno = event.target.value;

  // }
  // changePassword(event: any) {
  //   this.pswd = event.target.value;

  // }

  login() {

    if (this.loginform.valid) {
     
      var acno = this.loginform.value.acno;
      var pswd = this.loginform.value.pswd;
      var result = this.data.login(acno, pswd);
      if (result) {
        alert("login successful")
        this.router.navigateByUrl("dashboard")
      }
      



    }
    else{
      alert("invalid form")
    }
  }

}

