import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './flight';
import { DummyFlightService } from './dummy-flight.service';

@Injectable({
    providedIn: 'root',
    useExisting: DummyFlightService
})

export abstract class FlightService {

    abstract find(from: string, to: string): Observable<Flight[]>;

}
