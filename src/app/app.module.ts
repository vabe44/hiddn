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
import { LoginComponent } from './components/login/login.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { NewPeopleComponent } from './new-people/new-people.component';
import { MessagesComponent } from './messages/messages.component';
import { HeaderComponent } from './header/header.component';
import { DirectMessageComponent } from './direct-message/direct-message.component';
import { DirectMessageHeaderComponent } from './direct-message-header/direct-message-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProtectedComponent,
    NewPeopleComponent,
    MessagesComponent,
    HeaderComponent,
    DirectMessageComponent,
    DirectMessageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,

    // Init Firebase with environment configuration
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
