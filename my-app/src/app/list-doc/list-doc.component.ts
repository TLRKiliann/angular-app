import { Component, OnInit } from '@angular/core';
import { AppelModel } from '../models/appel-model.model';
import { AppelModelService } from '../services/appel-model.service';

@Component({
  selector: 'app-list-doc',
  templateUrl: './list-doc.component.html',
  styleUrls: ['./list-doc.component.scss']
})
export class ListDocComponent implements OnInit {
  appelModels!: AppelModel[];
  
  constructor(private appelModelService: AppelModelService) { }

  ngOnInit(): void {
    this.appelModels = this.appelModelService.getAllModels();
  }

}
