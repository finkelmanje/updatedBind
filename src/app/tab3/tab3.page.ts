import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit {
  myname: string = "";
  mydescribe: string = "";

 
  
  data:any[]=[];
  constructor(private post:DataService){

  }
  ngOnInit(){
    var pic = this.post.getData();
    this.data = this.post.getData() ;
  }
  plate() {
    let postapp = {
      name: this.myname,
      describe: this.mydescribe
    };
    this.post.setData(postapp);
    this.data = this.post.getData() ;
    console.log (this.post.getData());
  }
 }
 