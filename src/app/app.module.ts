import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SFibonacciComponent } from './shared/components/s-fibonacci/s-fibonacci.component';
import { ToggleImageComponent } from './shared/components/toggle-image/toggle-image.component';

@NgModule({
  declarations: [
    AppComponent,
    SFibonacciComponent,
    ToggleImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
