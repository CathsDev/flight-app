import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './flight';
import { FlightService } from './flight.service';

// @ts-ignore
@Injectable()

export class DefaultFlightService implements FlightService, OnDestroy {

    constructor(private http: HttpClient) {
    }

    find(from: string, to: string): Observable<Flight[]> {
        const url = 'http://demo.ANGULARarchitects.io/api/flight';
        const headers = new HttpHeaders().set('Accept', 'application/json');
        const params = new HttpParams().set('from', from).set('to', to);
        return this.http.get<Flight[]>(url, {headers, params});
    }

    ngOnDestroy(): void {
        console.log('Sag beim Abschied leise Servus!');
    }
}
