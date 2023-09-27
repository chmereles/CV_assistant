import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExperiencesComponent } from './modules/crud-data/experiences/experiences.component';
import { SkillComponent } from './modules/crud-data/skill/skill.component';
import { PersonalComponent } from './modules/crud-data/personal/personal.component';
import { CVComponent } from './modules/cv/cv.component';
import { ReferencesComponent } from './modules/crud-data/references/references.component';
import { ProfilesComponent } from './modules/profiles/profiles.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ProfilesFourComponent } from './modules/profiles-four/profiles-four.component';
import { AbandonGuard } from './core/guards/abandon.guard';
import { ProfileOneComponent } from './modules/profile-one/profile-one.component';
import { ProfileTwoComponent } from './modules/profile-two/profile-two.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: '#nosotrosContacto',
    component: AppComponent
  },
  {
    path: 'home/:id',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'cv',
        component: CVComponent,
        children: [
          {
            path: 'four',
            component: ProfilesFourComponent
          }
        ]
      },
      {
        path: 'personal',
        component: PersonalComponent,
        canDeactivate: [AbandonGuard]
      },
      {
        path: 'experiencias',
        component: ExperiencesComponent,
        canDeactivate: [AbandonGuard]
      },
      {
        path: 'referencias',
        component: ReferencesComponent,
        canDeactivate: [AbandonGuard]
      },
      {
        path: 'formaciones',
        component: FormationsComponent,
        canDeactivate: [AbandonGuard]
      },
      {
        path: 'opcionales',
        component: OptionalsComponent,
        canDeactivate: [AbandonGuard]
      },
      {
        path: 'lenguajes',
        component: LanguageComponent,
        canDeactivate: [AbandonGuard]
      },
      {
        path: 'habilidades',
        component: SkillComponent,
        canDeactivate: [AbandonGuard]
      },
      {
        path: 'profiles',
        component: ProfilesComponent
      }
    ]
  }, 
  {
    path: '',
    loadChildren: () => 
    import('./modules/lazyLoading/usuario.module')
    .then(m => m.UsuarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
