import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Elements/nav-bar/nav-bar.component';
import { HeroSectionComponent } from './Elements/hero-section/hero-section.component';
import { ServicesSectionComponent } from './Elements/services-section/services-section.component';
import { TestimonialsComponent } from './Elements/testimonials/testimonials.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { WorkSliderComponent } from './Elements/work-slider/work-slider.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamComponent } from './Elements/team/team.component';
import { FooterComponent } from './Elements/footer/footer.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { LoginFormComponent } from './Elements/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { MakeRequestComponent } from './Pages/make-request/make-request.component';
import { RequestFormComponent } from './Elements/request-form/request-form.component';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { SideBarComponent } from './Elements/side-bar/side-bar.component';
import { DashboardProjectsComponent } from './Elements/dashboard-projects/dashboard-projects.component';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroSectionComponent,
    ServicesSectionComponent,
    TestimonialsComponent,
    HomePageComponent,
    WorkSliderComponent,
    TeamComponent,
    FooterComponent,
    LoginPageComponent,
    LoginFormComponent,
    MakeRequestComponent,
    RequestFormComponent,
    DashboardComponent,
    SideBarComponent,
    DashboardProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    PasswordStrengthMeterModule.forRoot()
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
