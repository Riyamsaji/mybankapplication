import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  users: any = {
    1000: { accountnumber: 1000, password: "userone", username: "riya", balance: 10000 },
    1001: { accountnumber: 1001, password: "usertwo", username: "miya", balance: 1500 },
    1002: { accountnumber: 1002, password: "userthree", username: "jiya", balance: 17000 },
    1003: { accountnumber: 1003, password: "userfour", username: "liya", balance: 1000 }
  }
  constructor() { }
  register(accountnumber: any, password: any, username: any) {
    let accountdetails = this.users;
    if (accountnumber in accountdetails) {

      return false;

    }

    else {
      accountdetails[accountnumber] = {
        accountnumber, password, username, balance: 0
      }
      console.log(this.users);

      console.log(accountdetails);
      return true;




    }
  }
  login(accountnumber: any, password: any) {
    let accountdetails = this.users;
    if (accountnumber in accountdetails) {
      if (password == accountdetails[accountnumber]["password"]) {

        return true;
      }
      else {
        alert("invalid password")
        return false;

      }
    }
    else {

      alert("invalid accountnumber");
      return false;
    }
  }
  deposit(accountnumber: any, password: any, amount: any) {
    let accountdetails = this.users;
    var amt = parseInt(amount)
    if (accountnumber in accountdetails) {
      if (password == accountdetails[accountnumber]["password"]) {
        accountdetails[accountnumber]["balance"] += amt;
        return accountdetails[accountnumber]["balance"]
      }
      else {
        alert("invalid password")
        return false
      }

    }
    else {
      alert("invalid user")
      return false;
    }
  }
  withdraw(accountnumber: any, password: any, amount: any) {
    let accountdetails = this.users;
    var amt = parseInt(amount)
    if (accountnumber in accountdetails) {
      if (accountdetails[accountnumber]["balance"] > amt) {
        if (password == accountdetails[accountnumber]["password"]) {
          accountdetails[accountnumber]["balance"] -= amt;
          return accountdetails[accountnumber]["balance"]
        }
        else {
          alert("invalid password")
          return false
        }

      }
      else {
        alert("insuffient balance")
        return false;
      }
   
    }
    else {
      alert("invalid user")
      return false;
    }
  }

}
