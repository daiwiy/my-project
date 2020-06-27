import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService  } from '../services/http.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  name: string = null;
  pwd: string = null;
  message: any = false;
  cache:any;
  constructor(private router: Router, private http: HttpService) { }

  ngOnInit(): void {

  }

  send() {
    let data = {
      name: this.name,
      pwd: this.pwd
    }
    this.http.login(data)
      .subscribe((ll: any) => {
       if (ll.code==0) {
        this.router.navigate(['/home/Welcome',data]);
       }else {
        this.message = ll.message;
       }
      });
  
  }

}
