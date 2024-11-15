import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date/date.component';
import { CityPipe } from './city.pipe';
import { StatusColorPipe } from './status-color.pipe';
import { StatusFilterPipe } from './status-filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        DateComponent,
        CityPipe,
        StatusColorPipe,
        StatusFilterPipe,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        DateComponent,
        CityPipe,
        StatusColorPipe,
        StatusFilterPipe,
        CommonModule,
        FormsModule,
    ]
})
export class SharedModule { }
