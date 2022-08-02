import { Injectable } from '@angular/core';
import { AppelModel } from '../models/appel-model.model';


@Injectable({
	providedIn: 'root'
})
export class AppelModelService {
	appelModels!: AppelModel[] = [
    {
      id: 1,
      title: "Title One",
      description: "First item of angular !",
      createDate: new Date(),
      imgUrl: "https://cdn.suwalls.com/wallpapers/nature/autumn-landscape-15638-1920x1200.jpg",
      snaps: 50,
      location: "Paris"
    },
    {
      id: 2,    
      title: "Second Title",
      description: "Second item of angular !",
      createDate: new Date(),
      imgUrl: "https://www.pixelstalk.net/wp-content/uploads/2016/12/Free-Beautiful-Landscape-Image.jpg",
      snaps: 0,
      location: "Paris"
    },
    {
      id: 3,
      title: "Third title",
      description: "Third item of angular !",
      createDate: new Date(),
      imgUrl: "https://wallup.net/wp-content/uploads/2016/05/24/367747-nature-landscape-mountains-clouds-snowy_peak-trees-water-lake-mist-morning-Sun-forest-reflection-Wyoming-USA-national_park-Grand_Teton_National_Park.jpg",
      snaps: 130
    }];

    getAllAppelModel(): AppelModel[] {
    	return this.appelModels;
    }

    getAppelModelById(appelModelId: number): AppelModel {
    	const appelModel = this.appelModels.find(appelModel => appelModel.id === appelModelId)
    	if (!appelModel) {
    		throw new Error("appelModel not found");
    	} else {
    		return appelModel;
    	}
    }

    appelModelById(appelModelId: number, appelType: 'snap' | 'unsnap'): void {
    	const appelModel = this.getAppelModelById(appelModelId);
    	appelType === 'snap' ? appelModel.snaps++ : appelModel.snaps--;

    }
}
