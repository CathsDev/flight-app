import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';

import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightBookingComponent } from './flight-booking.component';


@NgModule({
    declarations: [
        FlightSearchComponent,
        FlightCardComponent,
        PassengerSearchComponent,
        FlightEditComponent,
        FlightBookingComponent,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
    ],
    exports: [
        FlightSearchComponent,
    ]
})
export class FlightBookingModule {
}
