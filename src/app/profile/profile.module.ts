import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HomeComponent,
         ProjectsComponent,
         ExperienceComponent,
         LoginComponent,
         RequestsPageComponent,
         ContactMeComponent,
         PageNotFoundComponent } from './components';
import { SearchPipe } from './search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from './components/skills/skills.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactMeComponent,
    PageNotFoundComponent,
    SearchPipe,
    LoginComponent,
    RequestsPageComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ]
})
export class ProfileModule { }
