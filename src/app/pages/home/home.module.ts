import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';

import { MainPictureComponent } from 'src/app/shared/main-picture/main-picture.component';
import { MainSectionComponent } from 'src/app/shared/sections/main-section/main-section.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubSectionComponent } from 'src/app/shared/sections/github-section/github-section.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { SocialSectionComponent } from 'src/app/shared/sections/social-section/social-section.component';
import { ExperienceSectionComponent } from 'src/app/shared/sections/experience-section/experience-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MainPictureComponent,
    MainSectionComponent,
    GithubSectionComponent,
    ExperienceSectionComponent,
    SocialSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
