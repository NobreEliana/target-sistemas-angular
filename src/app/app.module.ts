import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SFibonacciComponent } from './shared/components/s-fibonacci/s-fibonacci.component';
import { ToggleImageComponent } from './shared/components/toggle-image/toggle-image.component';
import { MatrizComponent } from './shared/components/matriz/matriz.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './core/header/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SFibonacciComponent,
    ToggleImageComponent,
    MatrizComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
