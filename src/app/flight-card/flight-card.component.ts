import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Flight } from '../flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnChanges, OnInit{
    @Input() item: Flight | null = null;
    @Input() selected = false;
    @Output() selectedChange = new EventEmitter<boolean>();

    constructor() {
        console.debug('constuctor', this.item);
    }

    ngOnInit(): void {
        this.selectedChange.next(true);
        console.debug('ngOnInit', this.item);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.debug('ngOnChanges', this.item);

        if (changes.item) {
            console.debug('ngOnChanges: item');
        }
        if (changes.selected) {
            console.debug('ngOnChanges: selected');
        }
    }

    select(): void {
        this.selected = true;
        this.selectedChange.emit(true);
    }

    deselect(): void {
        this.selected = false;
        this.selectedChange.emit(false);
    }

}
