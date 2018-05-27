import { QuestComponent } from './components/quest/quest.component';
import { DirectMessageComponent } from './components/direct-message/direct-message.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './components/login/login.component';
import { ProtectedComponent } from './components/protected/protected.component';

// Services
import { AuthGuardService } from './services/auth-guard.service';
import { NewPeopleComponent } from './components/new-people/new-people.component';

// Routes
const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/' },
    { path: '', component: LoginComponent },
    { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuardService] },
    { path: 'new-people', component: NewPeopleComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'direct-message', component: DirectMessageComponent },
    { path: 'quest', component: QuestComponent },
];

export const AppRouting = RouterModule.forRoot(appRoutes);
