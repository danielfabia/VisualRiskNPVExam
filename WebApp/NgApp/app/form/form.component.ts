import { Component } from '@angular/core';
import { NpvProfile } from '../data/npvProfile';
import { DataService } from '../data.service';

@Component({
    selector: 'npv-form',
    templateUrl: 'form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent {

    private npvProfile: NpvProfile;

    constructor(private data: DataService) {
    }

    ngOnInit() {
        this.data.obsNpvProfile.subscribe(np => this.npvProfile = np);        
    }

    onCalculate() {
        //console.log(this.npvProfile);
        this.data.computeNpvProfiles(this.npvProfile).subscribe((data) => {
            //console.log(data);
            this.data.syncCurrentNpvProfile(data);
        });
    }

    addCashFlow() {
        this.npvProfile.values.push(null);
    }

    //removeCashFlow(i: number) {
    //    this.npvProfile.values.splice(i, 1);
    //}
}