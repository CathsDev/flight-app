import { Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import {FlightBookingComponent} from './flight-booking.component';

export const FLIGHT_BOOKING_ROUTES: Routes = [
    {
        path: 'flight-booking',
        component: FlightBookingComponent,
        children: [
            {
                path: '',
                redirectTo: 'flight-search',
                pathMatch: 'full'
            },
            {
                path: 'flight-search',
                component: FlightSearchComponent
            },
            {
                path: 'passenger-search',
                component: PassengerSearchComponent
            },
            {
                path: 'flight-edit/:id',
                component: FlightEditComponent
            }
        ]
    }
];
