import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  private data = [];
 
  constructor() { }
 
  setData(post) {
    this.data = [...this.data, post];
  }
 
  getData() {
    return this.data;
  }
}