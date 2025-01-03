import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    { path: 'home', title: 'Home', component: HomeComponent},
    { path: 'profile', title: 'Profile', component: ProfileComponent },
    { path: '**', component: HomeComponent }
];
