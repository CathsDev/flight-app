import { HttpClient } from '@angular/common/http';
import { DefaultFlightService } from './flight-booking/default-flight.service';
import { DummyFlightService } from './flight-booking/dummy-flight.service';

const DEBUG = false;

export const createFlightServive = (http: HttpClient) => {
    if (!DEBUG) {
        return new DefaultFlightService(http);
    }
    else {
        return new DummyFlightService();
    }
};
