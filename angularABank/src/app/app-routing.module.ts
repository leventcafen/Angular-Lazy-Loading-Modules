import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'education',
    loadChildren: () => import('./components/education/education.module').then(m => m.EducationModule)
  },
  {
    path: 'experience',
    loadChildren: () => import('./components/experience/experience.module').then(m => m.ExperienceModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('./components/skills/skills.module').then(m => m.SkillsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
