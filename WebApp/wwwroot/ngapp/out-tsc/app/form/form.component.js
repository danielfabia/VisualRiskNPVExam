import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let FormComponent = class FormComponent {
    constructor(data, spinner) {
        this.data = data;
        this.spinner = spinner;
    }
    ngOnInit() {
        this.data.obsNpvProfile.subscribe(np => this.npvProfile = np);
    }
    onCalculate() {
        this.spinner.show();
        this.data.computeNpvProfiles(this.npvProfile).subscribe((data) => {
            // computeNpvProfiles model do not have id and name props
            // copy id and name from current NpvProfile 
            data.id = this.npvProfile.id;
            data.name = this.npvProfile.name;
            this.data.syncCurrentNpvProfile(data);
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            window.alert(error); // TODO: replace with MessageBox component
        });
    }
    addCashFlow() {
        this.npvProfile.values.push(null);
        // TODO: focus to new field
    }
    removeCashFlow(i) {
        this.npvProfile.values.splice(i, 1);
    }
    trackByFn(index, item) {
        return index;
    }
};
FormComponent = tslib_1.__decorate([
    Component({
        selector: 'npv-form',
        templateUrl: 'form.component.html',
        styleUrls: ['./form.component.scss']
    })
], FormComponent);
export { FormComponent };
//# sourceMappingURL=form.component.js.map