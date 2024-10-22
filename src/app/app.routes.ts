import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { AboutComponent } from './features/about/about.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'about', component: AboutComponent }
];
