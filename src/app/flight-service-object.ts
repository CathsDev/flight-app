import { of } from 'rxjs';

export const flightServiceObject = {
    find: (from: string, to: string) => {
        console.log('find', from, to);
        return of([
            { id: 1, from, to, date: new Date().toISOString() }
        ]);
    }
};
