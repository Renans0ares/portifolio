import { Component } from '@angular/core';
import { HomePresentationComponent } from "../../components/home-presentation/home-presentation.component";
import { HomePhraseComponent } from "../../components/home-phrase/home-phrase.component";
import { HomeProjectsComponent } from "../../components/home-projects/home-projects.component";
import { HomeContactsComponent } from "../../components/home-contacts/home-contacts.component";
import { HomeSkillsComponent } from "../../components/home-skills/home-skills.component";
import { HomeAboutComponent } from "../../components/home-about/home-about.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomePresentationComponent, HomePhraseComponent, HomeProjectsComponent, HomeContactsComponent, HomeSkillsComponent, HomeAboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
