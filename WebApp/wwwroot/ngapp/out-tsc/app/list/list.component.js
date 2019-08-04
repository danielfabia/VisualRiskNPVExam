import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ListComponent = class ListComponent {
    constructor(data) {
        this.data = data;
        this.data.obsNpvProfile.subscribe(np => this.npvProfile = np);
    }
    ngOnInit() {
        this.data.getSavedNpvProfiles().subscribe((data) => {
            this.npvProfileList = data;
        });
    }
    onProfileSelected(value) {
        this.data.getNpvProfile(value.id).subscribe((data) => {
            this.data.syncCurrentNpvProfile(data);
        });
    }
    onSave() {
        console.log("onSave");
        if (this.npvProfile.id) {
            // to UPDATE
            this.data.updateNpvProfile(this.npvProfile).subscribe((data) => {
                console.log(data);
            });
        }
    }
};
ListComponent = tslib_1.__decorate([
    Component({
        selector: 'npv-list',
        templateUrl: 'list.component.html',
        styleUrls: ['./list.component.scss']
    })
], ListComponent);
export { ListComponent };
//# sourceMappingURL=list.component.js.map