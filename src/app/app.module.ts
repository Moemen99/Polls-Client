import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollComponent } from './poll/poll.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './Pipes/summary.pipe';
import { PropositionPipe } from './Pipes/proposition.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { LikeComponent } from './like/like.component';
import { LoginComponent } from './login/login.component';
//http client module import missing
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';  
@NgModule({
  declarations: [
    AppComponent,
    PollComponent,
    SummaryPipe,
    PropositionPipe,
    FavouriteComponent,
    LikeComponent,
    LoginComponent,
    HomeComponent
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
