import { Component, OnInit, Input } from '@angular/core';
import { AppelModel } from '../models/appel-model.model';
import { AppelModelService } from '../services/appel.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-first-doc',
  templateUrl: './first-doc.component.html',
  styleUrls: ['./first-doc.component.scss']
})
export class FirstDocComponent implements OnInit {
  @Input() appelModel!: AppelModel;

  btnText!: string;

  constructor(private appelModelService: AppelModelService,
              private router: Router) {}

  ngOnInit() {
    this.btnText = "Like";
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

  onViewFaceSnap() {
    this.router.navigateByUrl(`appelModels/${this.appelModel.id}`);
  }
}
