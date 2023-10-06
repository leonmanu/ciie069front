import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CargoFormComponent } from './components/cargo/cargo-form/cargo-form.component';
import { CargoListComponent } from './components/cargo/cargo-list/cargo-list.component';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from "@angular/material/button";
import { NavbarModule } from './components/navbar/navbar.module';
import { CargoFormModule } from './components/cargo/cargo-form/cargo-form.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CargoFormComponent,
    CargoListComponent,
    CargoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    NavbarModule,
    CargoFormModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
