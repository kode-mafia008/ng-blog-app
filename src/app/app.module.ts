import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RoomComponent } from './room/room.component';
import { VideoComponent } from './home/video/video.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { TeamComponent } from './home/team/team.component';
import { NewsletterComponent } from './home/newsletter/newsletter.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { BookingComponent } from './booking/booking.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    RoomComponent,
    VideoComponent,
    TestimonialComponent,
    TeamComponent,
    NewsletterComponent,
    CarouselComponent,
    BookingComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
