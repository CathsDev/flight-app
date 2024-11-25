import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';

@Directive({
    selector: 'input[appCity]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: CityValidationDirective,
            multi: true
        }
    ]
})
export class CityValidationDirective implements Validator {
    @Input() appCity = '';
    @Input() strict = false;

    public validate(control: AbstractControl): ValidationErrors | null {
        const allowecCities = this.appCity.split(',');
        if (allowecCities.includes(control.value)) {
            return null;
        }
        return {
            appCity: true
        };
    }

}
