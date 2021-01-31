import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CommonModule } from '@angular/common';
import { VideoOverlayComponent } from './video-overlay/video-overlay.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './home/sections/sections/landing/landing.component';
import { HighlightsComponent } from './home/sections/sections/highlights/highlights.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationFooterComponent } from './navigation/navigation-footer/navigation-footer.component';
import { NavigationHeaderComponent } from './navigation/navigation-header/navigation-header.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    VideoOverlayComponent,
    HomeComponent,
    LandingComponent,
    HighlightsComponent,
    AboutComponent,
    ContactComponent,
    NavigationFooterComponent,
    NavigationHeaderComponent
  ],
  imports: [
      AppRoutingModule,
      BrowserModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      CommonModule,
      MatButtonModule,
      MatIconModule,
      MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
