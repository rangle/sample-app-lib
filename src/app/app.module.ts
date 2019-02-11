import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SampleAppLibModule } from 'sample-app-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SampleAppLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
