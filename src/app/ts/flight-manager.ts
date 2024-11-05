import { Flight } from '../flight';

export class FlightManager {
    private cache: Flight[];

    constructor(cache: Flight[] | null | undefined) {
        if (!cache) {
            cache = [];
        }
        this.cache = cache;
    }

    search(from: string, to: string): Flight[] {
        const result = new Array<Flight>();
        for (let f of this.cache) {
            if (f.from === from && f.to === to) {
                result.push(f);
            }
        }
        return result;
    }

    search2(from: string, to: string): Flight[] {
        const result: Flight[] = this.cache.filter(function (f: Flight) {
            return f.from === from && f.to === to;
        });
        return result;
    }

    search3(from: string, to: string): Flight[] {
        return this.cache.filter(f => f.from === from && f.to === to);
    }

}
