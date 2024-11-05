import { Flight } from '../flight';
import { FlightManager } from './flight-manager';
import { ScheduledFlight } from './scheduled-flight';
import { CharterFlight } from './charter-flight';
import { Passenger, Person, Pilot } from './person';
import { CompanyAddress } from './company-address';
import { FlightInvoice } from './flight-invoice';

let flights: Array<Flight> = [
    {
        id: 17,
        from: 'Graz',
        to: 'Hamburg',
        date: '2022-02-27T17:00+01:00'
    },
    {
        id: 18,
        from: 'Graz',
        to: 'Hamburg',
        date: '2022-02-27T18:00+01:00'
    },
    {
        id: 19,
        from: 'Graz',
        to: 'Mallorca',
        date: '2022-02-27T19:00+01:00'
    },
    {
        id: 20,
        from: 'Graz',
        to: 'Hamburg',
        date: '2022-02-27T20:00+01:00'
    }
];

let fm = new FlightManager(flights);
let result1 = fm.search('Graz', 'Hamburg');

for (let f of result1) {
    console.debug('flight', f);
}

function showFlight(f: Flight): void {
    console.debug('----Flight----');
    console.debug('id', f.id);
    console.debug('from', f.from);
    console.debug('to', f.to);
    console.debug('date', f.date);
}

const anotherFlight: Flight = {
    id: 1,
    from: 'Griz',
    to: 'Hamburg',
    date: '2018-12-24T17:00:00.00+01:00'
}

showFlight(anotherFlight);

let oneMoreFlight: Flight = new ScheduledFlight();
oneMoreFlight.distance = 1000;

if (oneMoreFlight.calcPrice) {
    console.debug('Preis', oneMoreFlight.calcPrice());
}

oneMoreFlight = new CharterFlight();

oneMoreFlight.distance = 1000;
if (oneMoreFlight.calcPrice) {
    console.debug('Preis', oneMoreFlight.calcPrice()); // neuer Preis
}

const person1: Person = new Passenger();
person1.firstName = 'Max';
person1.lastName = 'Muster';

const person2: Person = new Pilot();
person2.firstName = 'Jens';
person2.lastName = 'Wolkenmeyer';

const isPerson = person1 instanceof Person; // true
const isPassenger = person1 instanceof Passenger; // true
const isPilot = person1 instanceof Pilot; // false

console.debug('isPerson', isPerson);
console.debug('isPassenger', isPassenger);
console.debug('isPilot', isPilot);

const a1 = new CompanyAddress(1);
a1.id = 1;
a1.city = 'Graz';
a1.street = 'Hier';
a1.zipCode = '8010';
a1.companyName = 'Steh & Schau GmbH';

console.debug('a1 as csv', a1.toCSV());
console.debug('a1 as full Address', a1.fullAddress());

const nextFlight = new ScheduledFlight();
nextFlight.date = '2018-12-24';
console.debug('unix-date', nextFlight.unixDate);
nextFlight.unixDate = 1000;
console.debug('unix-date', nextFlight.date);

const charterFlightToCharge = new CharterFlight();
charterFlightToCharge.from = 'Graz';
charterFlightToCharge.to = 'Hamburg';
charterFlightToCharge.distance = 1000;

const price = charterFlightToCharge.calcPrice();
const charterInvoice = new FlightInvoice<CharterFlight>(charterFlightToCharge, price);

console.debug('charterInvoice', charterInvoice.toString());

function div(a: number, b: number): number {
    if (b === 0) {
        throw new Error('division by 0 is not allowed');
    }
    return a / b;
}

try {
    let result1 = div(10, 3);
    console.debug('result1', result1);
    let result2 = div(10, 0);
    console.debug('result2', result2);
}

catch (error) {
    console.error('Fehler', error);
}

finally {
    console.debug('finally');
}

