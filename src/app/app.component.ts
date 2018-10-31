import { Component } from '@angular/core';
declare var require: any;
// const domtoimage = require('dom-to-image');
import domtoimage from 'dom-to-image';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // imageUrl: string;
  base64: string;
  imageUrl = 'https://carboncostume.com/wordpress/wp-content/uploads/2013/07/Homer-Simpson.jpg';
  constructor() {
    // this.imageUrl = 'https://carboncostume.com/wordpress/wp-content/uploads/2013/07/Homer-Simpson.jpg';
    // this.imageUrl = '../assets/Homer-Simpson.jpg';
    console.log('APP COMPONENT');

  }
  convertToBase64() {
    // const image = document.createElement('img');
    // image.src = this.imageUrl;
    const imgNode = document.getElementById(`image`);
    // if (imgNode ) {
      console.log('SELECTED IMAGE');
      console.log(imgNode);
      console.log('SELECTED IMAGE');
      domtoimage.toPng(imgNode)
      .then( (dataUrl: string) => {
        console.log('SELECTED IMAGE 2');
        console.log(dataUrl);
        this.base64 = dataUrl;
        console.log('SELECTED IMAGE 2');
      }).catch( (e: any) => {
        console.log('SELECTED IMAGE BASE64 SOMETHING WENT WRONG');
        console.log(e);
      });
    // }
  }
}
