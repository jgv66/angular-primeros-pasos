import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { MainPageModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    MainPageModule
  ],
    // HeroesModule,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
