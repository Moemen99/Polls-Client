import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollComponent } from './components/poll/poll.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './Pipes/summary.pipe';
import { PropositionPipe } from './Pipes/proposition.pipe';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { LikeComponent } from './components/like/like.component';
import { LoginComponent } from './components/login/login.component';
//http client module import missing
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';  
@NgModule({
  declarations: [
    AppComponent,
    PollComponent,
    SummaryPipe,
    PropositionPipe,
    FavouriteComponent,
    LikeComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
