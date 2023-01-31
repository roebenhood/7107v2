import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroSectionComponent } from './pages/home/sections/hero-section/hero-section.component';
import { JobseekersComponent } from './pages/home/sections/jobseekers/jobseekers.component';
import { CountriesComponent } from './pages/home/sections/countries/countries.component';
import { IndustriesServedComponent } from './pages/home/sections/industries-served/industries-served.component';
import { AboutComponent } from './pages/about/about.component';
import { HeroAboutComponent } from './pages/about/sections/hero-about/hero-about.component';
import { AboutStoryComponent } from './pages/about/sections/about-story/about-story.component';
import { AboutSeparatorComponent } from './pages/about/sections/about-separator/about-separator.component';
import { AboutPoeaComponent } from './pages/about/sections/about-poea/about-poea.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeroSectionComponent,
    JobseekersComponent,
    CountriesComponent,
    IndustriesServedComponent,
    AboutComponent,
    HeroAboutComponent,
    AboutStoryComponent,
    AboutSeparatorComponent,
    AboutPoeaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
