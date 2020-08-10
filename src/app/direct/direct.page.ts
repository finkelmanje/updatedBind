import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.page.html',
  styleUrls: ['./direct.page.scss'],
})
export class DirectPage implements OnInit{
  message = '';
  messages = [];
  currentUser = '';
  snake = null;
  constructor(private socket: Socket, private toastCtrl: ToastController,private activatedRoute: ActivatedRoute) { }
 
  ngOnInit() {
  this.snake = this.activatedRoute.snapshot.paramMap.get('snake');

    this.socket.connect();
 
    let name = this.snake;
    this.currentUser = name;
    
    this.socket.emit('set-name', name);
 
    this.socket.fromEvent('users-changed').subscribe(data => {
      let user = data['user'];
      if (data['event'] === 'left') {
        this.showToast('User left: ' + user);
      } else {
        this.showToast('User joined: ' + user);
      }
    });
 
    this.socket.fromEvent('message').subscribe(message => {
      this.messages.push(message);
    });
  }
 
  sendMessage() {
    this.socket.emit('send-message', { text: this.message });
    this.message = '';
  }
 
  ionViewWillLeave() {
    this.socket.disconnect();
  }
 
  async showToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
}
