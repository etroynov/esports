/**
 * Vendor
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
 * Modules
 */

import { AppRoutingModule } from './routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';

/**
 * Expo
 */

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, NewsComponent, TeamsComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
