import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { DateComponent } from './date/date.component';
import { CityPipe } from './city.pipe';
import { StatusFilterPipe } from './status-filter.pipe';
import { StatusColorPipe } from './status-color.pipe';

@NgModule({
    imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        SidebarComponent,
        NavbarComponent,
        FlightSearchComponent,
        FlightCardComponent,
        DateComponent,
        CityPipe,
        StatusFilterPipe,
        StatusColorPipe
    ],
    providers: [],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule { }
