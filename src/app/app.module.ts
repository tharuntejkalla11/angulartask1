import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { manualComponent } from './manualComponent/manualComponent.component';
import { Component2Component } from './component2/component2.component';

@NgModule({
  declarations: [
    AppComponent,manualComponent, Component2Component
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
