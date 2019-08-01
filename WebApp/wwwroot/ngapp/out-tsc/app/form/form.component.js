import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let FormComponent = class FormComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        this.data.obsNpvProfile.subscribe(np => this.npvProfile = np);
    }
    onCalculate() {
        this.data.computeNpvProfiles(this.npvProfile).subscribe((data) => {
            console.log(data);
            this.data.syncCurrentNpvProfile(data);
        });
    }
    addCashFlow() {
        this.npvProfile.values.push(null);
    }
    removeCashFlow(i) {
        console.log(i);
        console.log(this.npvProfile.values);
        this.npvProfile.values.splice(i, 1);
        console.log(this.npvProfile.values);
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