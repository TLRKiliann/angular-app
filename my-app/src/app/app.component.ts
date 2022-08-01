import { Component, OnInit } from '@angular/core';
import { Hamburger } from './models/Hamburger-model.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hamburgers!: Hamburger[];

  ngOnInit() {
    this.hamburgers = [{
      title: "Hello",
      name: "cheese",
      age: 44
    }];
  }
}
