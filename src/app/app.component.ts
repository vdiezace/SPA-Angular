import { Component } from '@angular/core';
import { Post } from './interfaces/post.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad_5';


  constructor(){
  
  }

  currentNew = "Current New";
}
