import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno1 = "";
  pswd1 = "";
  amount1 = "";
  acno2 = "";
  pswd2 = "";
  amount2 = "";

  constructor(private data: DatabaseService) { }

  ngOnInit(): void {
  }

  deposit() {
    var acno1 = this.acno1;
    var pswd1 = this.pswd1;
    var amount1=this.amount1
    var result = this.data.deposit(acno1, pswd1, amount1)
    if (result) {
      alert("credited successfully and new balance is" +result )
    }
  }
  withdraw() {
    var acno2 = this.acno2;
    var pswd2 = this.pswd2;
    var amount2=this.amount2;
    var result = this.data.withdraw(acno2, pswd2, amount2)
    if (result) {
      alert("debited successfully and new balance is" +result )
    }

  }
}
