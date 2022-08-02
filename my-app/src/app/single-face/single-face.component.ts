import { Component, OnInit } from '@angular/core';
import { AppelModel } from '../models/appel-model.model';
import { AppelModelService } from '../services/appel.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-face',
  templateUrl: './single-face.component.html',
  styleUrls: ['./single-face.component.scss']
})
export class SingleFaceComponent implements OnInit {
  appelModel!: AppelModel;
  btnText!: string;

  constructor(private appelModelService: AppelModelService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.btnText = "Like";
    const appelModelId = +this.route.snapshot.params['id'];
    this.appelModel = this.appelModelService.getAppelModelById(appelModelId);
  }

  onSnaps() {
    if (this.btnText === 'Like') {
      this.appelModelService.appelModelById(this.appelModel.id, 'snap');
      this.btnText = 'Dislike';
    } else {
      this.appelModelService.appelModelById(this.appelModel.id, 'unsnap');
      this.btnText = 'Like';
    }
  }

}
