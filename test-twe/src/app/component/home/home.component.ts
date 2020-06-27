import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public identity:string= "管理员";
  public name:string= "admin";
  constructor(private service: HttpService ,private activated: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}
