import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'landmarks',
    loadComponent: () => import('./landmarks/landmarks.page').then( m => m.LandmarksPage)
  },
  {
    path: 'restaurants',
    loadComponent: () => import('./restaurants/restaurants.page').then( m => m.RestaurantsPage)
  },
  {
    path: 'activities',
    loadComponent: () => import('./activities/activities.page').then( m => m.ActivitiesPage)
  },
  {
    path: 'questions',
    loadComponent: () => import('./questions/questions.page').then( m => m.QuestionsPage)
  },
  {
    path: 'itinerary',
    loadComponent: () => import('./itinerary/itinerary.page').then( m => m.ItineraryPage)
  },
];
