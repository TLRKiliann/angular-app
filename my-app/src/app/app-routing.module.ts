import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDocComponent } from './list-doc/list-doc.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceComponent } from './single-face/single-face.component';

const routes: Routes = [
    {path: 'appelModels/:id', component: SingleFaceComponent},
    {path: 'appelModels', component: ListDocComponent},
    {path: '', component: LandingPageComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
