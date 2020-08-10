import { Component, OnInit} from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
 
 
  constructor(private socket: Socket, private toastCtrl: ToastController) { }
 
  ngOnInit() {
  }
}
