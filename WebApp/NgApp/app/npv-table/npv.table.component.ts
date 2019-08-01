import { Component, Input } from '@angular/core';
import { NpvProfile } from '../data/npvProfile';

@Component({
    selector: 'npv-table',
    templateUrl: 'npv.table.component.html',
    styleUrls: ['./npv.table.component.scss']
})
export class NpvTableComponent {

    @Input("npv") npvProfile: NpvProfile;

    constructor() {
    }

    ngOnInit() {
    }
}