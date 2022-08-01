import { Component, OnInit, Input } from '@angular/core';
import { Hamburger } from '../models/Hamburger-model.model';

@Component({
  selector: 'app-first-doc',
  templateUrl: './first-doc.component.html',
  styleUrls: ['./first-doc.component.scss']
})
export class FirstDocComponent implements OnInit {
  @Input() hamburg!: Hamburger;

  constructor() {}

  ngOnInit() {}
}
