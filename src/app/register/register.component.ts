import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
acno="";
pswd="";
uname="";
  registerform = this.fb.group({
    uname: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno: ['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
  })
  constructor(private data: DatabaseService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {
    //to check errors are there(validations are not followed properly)
   
    // to check form is valid or not
    if (this.registerform.valid) {
      var acno = this.registerform.value.acno;
      var pswd = this.registerform.value.pswd;
      var uname = this.registerform.value.uname;
      console.log(this.registerform.value)
      var result = this.data.register(acno, pswd, uname);

      if (result) {
        alert("successfully registered");
        this.router.navigateByUrl("")
      }
      else {
        alert("invalid");
        this.router.navigateByUrl("")
      }
    }
    else {
      alert("invalid form")
    }

  }
}
