import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HighlightBasicDirective } from './directive/highlight-basic.directive';
import { HighlightBetterDirective } from './directive/highlight-better.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightBasicDirective,
    HighlightBetterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
