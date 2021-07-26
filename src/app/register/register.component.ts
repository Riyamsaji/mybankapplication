import { Component, OnInit } from '@angular/core';
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
  constructor(private data:DatabaseService,private router:Router) { }

  ngOnInit(): void {
  }
register(){
var acno=this.acno;
var pswd=this.pswd;
var uname=this.uname;

var result=this.data.register(acno,pswd,uname);
if(result){
  alert("registered succesful") 

  this.router.navigateByUrl("")
}
else{
  alert("please login ,user already exist")
  this.router.navigateByUrl("")
 
  
  
}
}
}
