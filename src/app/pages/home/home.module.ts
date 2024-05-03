import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

import { MainPictureComponent } from 'src/app/shared/components/main-picture/main-picture.component';
import { MainSectionComponent } from 'src/app/shared/components/sections/main-section/main-section.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubSectionComponent } from 'src/app/shared/components/sections/github-section/github-section.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { SocialSectionComponent } from 'src/app/shared/components/sections/social-section/social-section.component';
import { ExperienceSectionComponent } from 'src/app/shared/components/sections/experience-section/experience-section.component';

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
