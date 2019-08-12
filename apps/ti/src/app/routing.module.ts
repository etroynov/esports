/*!
 * Vendor
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*!
 * Pages
 */

import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

/*!
 * Routes
 */

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: '**', component: NotFoundComponent }
];

/*!
 * Expo
 */

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
