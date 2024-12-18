import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from '../flight-booking/flight';

@Pipe({
  name: 'statusFilter',
    pure: true
})
export class StatusFilterPipe implements PipeTransform {

  transform(flights: Flight[], delayFilter: boolean | undefined): Flight[] {
      if (typeof delayFilter === 'undefined') {
          return flights;
      }

      return flights.filter(f => f.delayed === delayFilter);
  }

}
