import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstDocComponent } from './first-doc/first-doc.component';
import { HeaderComponent } from './header/header.component';
import { ListDocComponent } from './list-doc/list-doc.component';
import { SingleFaceComponent } from './single-face/single-face.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    FirstDocComponent,
    HeaderComponent,
    ListDocComponent,
    SingleFaceComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
