import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { NpvProfile } from '../data/npvProfile';
import { DataService } from '../data.service';

@Component({
    selector: 'npv-form',
    templateUrl: 'form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent {

    private npvProfile: NpvProfile;

    constructor(private data: DataService, private spinner: NgxSpinnerService) {
    }

    ngOnInit() {
        this.data.obsNpvProfile.subscribe(np => this.npvProfile = np);
    }

    onCalculate() {
        this.spinner.show();

        this.data.computeNpvProfiles(this.npvProfile).subscribe(
            (data) => {
                // computeNpvProfiles model do not have id and name props
                // copy id and name from current NpvProfile 
                data.id = this.npvProfile.id;
                data.name = this.npvProfile.name;

                this.data.syncCurrentNpvProfile(data);

                this.spinner.hide();
            },
            (error) => {
                this.spinner.hide();
                window.alert(error); // TODO: replace with MessageBox component
            }
        );
    }

    addCashFlow() {
        this.npvProfile.values.push(null);
        // TODO: focus to new field
    }

    removeCashFlow(i: number) {
        this.npvProfile.values.splice(i, 1);
    }

    trackByFn(index: any, item: any) {
        return index;
    }
}