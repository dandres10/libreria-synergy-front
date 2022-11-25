import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YoutubeApiiModule } from 'projects/youtube-apii/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    YoutubeApiiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
