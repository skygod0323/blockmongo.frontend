import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HomePage} from "./home/home.component";
import {RouterModule} from "@angular/router";
import {AppRoutes} from "./app.routing";
import {ServicesModule} from "./services/services.module";
import {GrowlModule} from "primeng/growl";
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./shared/material.module";


@NgModule({
    declarations: [
        AppComponent,
        HomePage
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(AppRoutes),
        HttpClientModule,
        ServicesModule,
        GrowlModule,
        SharedModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
