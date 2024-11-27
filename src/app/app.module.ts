import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { ProfileModule } from './profile/profile.module';
import { AppComponent, NavigationComponent } from './navigation-components';
import { environment } from '../environments/environment';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    ToastrModule.forRoot(),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(()=> initializeApp(environment.firebaseConfig))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
