import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Services
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';

// Routing
import { AppRouting } from './app-routing.module';

// Import environment configuration
import { environment } from '../environments/environment';
// Import AngularFire
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SlickModule } from 'ngx-slick';

import { LoginComponent } from './components/login/login.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { NewPeopleComponent } from './components/new-people/new-people.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HeaderComponent } from './components/header/header.component';
import { DirectMessageComponent } from './components/direct-message/direct-message.component';
import { DirectMessageHeaderComponent } from './components/direct-message-header/direct-message-header.component';
import { NewPeopleCardComponent } from './components/new-people-card/new-people-card.component';
import { UsersService } from './services/users.service';
import { QuestComponent } from './components/quest/quest.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProtectedComponent,
    NewPeopleComponent,
    MessagesComponent,
    HeaderComponent,
    DirectMessageComponent,
    DirectMessageHeaderComponent,
    NewPeopleCardComponent,
    QuestComponent,
    AchievementsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,

    // Init Firebase with environment configuration
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    SlickModule.forRoot()
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
