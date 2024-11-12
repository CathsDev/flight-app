import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './flight';
import { DefaultFlightService } from './default-flight.service';

@Injectable({
    providedIn: 'root',
    useExisting: DefaultFlightService
})

export abstract class FlightService {

    abstract find(from: string, to: string): Observable<Flight[]>;

}
