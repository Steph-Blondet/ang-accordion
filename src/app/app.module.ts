import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { PrevNextComponent } from './prev-next/prev-next.component';

@NgModule({
  declarations: [
    AppComponent,
    PrevNextComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
