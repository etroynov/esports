/**
 * Vendor
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * Modules
 */

import { RouterModule } from '@angular/router';

/**
 * Components
 */

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { TeamsComponent } from './pages/teams/teams.component';

/**
 * Expo
 */

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, NewsComponent, TeamsComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
