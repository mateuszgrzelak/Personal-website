import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: 'aboutme', component: AboutMeComponent, data: { animation: "aboutme" } },
  { path: 'projects', component: ProjectsComponent, data: { animation: "projects" } },
  { path: 'contact', component: ContactComponent, data: { animation: "contact" } },

  { path: '**', redirectTo: 'aboutme', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
