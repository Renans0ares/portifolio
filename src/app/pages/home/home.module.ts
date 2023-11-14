import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { BtnPrimaryComponent } from 'src/app/shared/btn-primary/btn-primary.component';
import { MainPictureComponent } from 'src/app/shared/main-picture/main-picture.component';
import { MainSectionComponent } from 'src/app/shared/main-section/main-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent,
    MainPictureComponent,
    MainSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
