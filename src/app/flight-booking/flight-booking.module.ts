import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';

import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightBookingComponent } from './flight-booking.component';

import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        FlightSearchComponent,
        FlightCardComponent,
        PassengerSearchComponent,
        FlightEditComponent,
        FlightBookingComponent,
    ],
    imports: [
        RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
        SharedModule,
        FormsModule,
    ],
    exports: [
        FlightSearchComponent,
    ]
})
export class FlightBookingModule {
}
