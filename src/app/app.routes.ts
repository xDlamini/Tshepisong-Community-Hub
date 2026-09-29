import { Routes } from '@angular/router';
import { LeadersComponent } from './features/leaders/leaders.component';
import { ServiceTrackerPageComponent } from './features/service-tracker/service-tracker-page/service-tracker-page.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Home | Tshepisong Community Hub',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'About Tshepisong | Community Hub',
  },
  {
    path: 'spotlight',
    loadComponent: () =>
      import('./features/spotlight/spotlight.component').then(m => m.SpotlightComponent),
    title: 'Community Spotlight | Tshepisong',
  },
  {
    path: 'businesses',
    loadComponent: () =>
      import('./features/businesses/businesses.component').then(m => m.BusinessesComponent),
    title: 'Local Businesses | Tshepisong',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./features/services/services.component').then(m => m.ServicesComponent),
    title: 'Services | Tshepisong Community Hub',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Get Involved | Tshepisong Community Hub',
  },
  {
    path: 'leaders', component: LeadersComponent
  },
  {
    path: 'service-tracker', component: ServiceTrackerPageComponent
  },
  {
    path: '**',
    redirectTo: '',
  },
];
