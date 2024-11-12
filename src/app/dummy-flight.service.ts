import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from './flight';
import { FlightService } from './flight.service';

@Injectable()

export class DummyFlightService implements FlightService {

  constructor() { }

    find(from: string, to: string): Observable<Flight[]> {
      return of([
          { id: 1, from: 'Frankfurt', to: 'Flagranti', date: '2022-01-02T19:00-01:00' },
          { id: 2, from: 'Frankfurt', to: 'Kognito', date: '2022-01-02T19:00-01:00' },
          { id: 1, from: 'Frankfurt', to: 'Mallorca', date: '2022-01-02T19:00-01:00' },
      ]);
    }
}
