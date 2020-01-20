import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  textStyle = {'color': 'red', 'font-size':'5em'};
  public textStyle2 = {};
  
  
 constructor(
  ) {
    console.log(this.textStyle);
    console.log(typeof(this.textStyle));
    this.textStyle2['color'] = 'green';
    this.textStyle2['font-size'] = '4em';
  }}
