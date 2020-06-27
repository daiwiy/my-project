import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  public data: any = [
    { text: '信息管理',
      show:false,
      children:[{
        text: '信息管理',
        link: '/home/Welcome',
      },
      {
        text: '信息管理',
        link: '/home/Welcome',
      }]
    },
    { text: 'Article管理',
      show:false,
      children:[{
        text: 'Article管理',
        link: '/home/Content',
      },
      {
        text: '编辑',
        link: '/home/Content',
      }]
    },
    { text: '人才管理',
      show:false,
      children:[{
        text: '人才管理',
        link: '/home/Welcome',
      },
      {
        text: '人才管理',
        link: '/home/Welcome',
      }]
    },
    {
      text: '推荐管理',
      show:false,
      children:[{
        text: '推荐管理',
        link: '/home/Welcome',
      },
      {
        text: '推荐管理',
        link: '/home/Welcome',
      }]
    },
  ]

  constructor(private service: HttpService, ) { }

  ngOnInit(): void {

  }
  show(e) {
    this.data[e].show = !this.data[e].show;
    
    console.log(e);
    
  }

}
