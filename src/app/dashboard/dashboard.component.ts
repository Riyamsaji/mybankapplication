import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user=this.data.current_user;

  depositform=this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd1:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })
  withdrawform = this.fb.group({
    acno2: ['accountnumber', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd2: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    amount2: ['', [Validators.required, Validators.pattern('[0-9]*')]]

  })
  constructor(private data: DatabaseService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

deposit(){
  if(this.depositform.valid){
  var acno1=this.depositform.value.acno1;
  var pswd1=this.depositform.value.pswd1;
  var amount1=this.depositform.value.amount1;
  var result=this.data.deposit(acno1,pswd1,amount1);
  if(result){
    alert("credited succesfully and new balance is "+result)
  }
}
}
  

withdraw() {
  if (this.withdrawform.valid) {
    var acno2 = this.withdrawform.value.acno2;
    var pswd2 = this.withdrawform.value.pswd2;
    var amount2 = this.withdrawform.value.amount2;
    var result = this.data.withdraw(acno2, pswd2, amount2)
    if (result) {
      alert("debited successfully and new balance is" + result)
    }
  }
  else {
    alert("invalid form")
  }

}
}
