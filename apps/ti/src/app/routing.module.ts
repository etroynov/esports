/*!
 * Vendor
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*!
 * Pages
 */

import { HomeComponent } from './pages/home/home.component';

/*!
 * Routes
 */

const routes: Routes = [
  { path: '/', component: HomeComponent }
];

/*!
 * Expo
 */

NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
