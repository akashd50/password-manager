import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from "@angular/material/button";
import {MatRippleModule} from "@angular/material/core";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {InputsModule} from "./inputs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppLandingPageComponent} from "./app-landing-page/app-landing-page.component";

@NgModule({
    declarations: [
        AppComponent,
        AppLandingPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatRippleModule,
        MatButtonToggleModule,
        InputsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
