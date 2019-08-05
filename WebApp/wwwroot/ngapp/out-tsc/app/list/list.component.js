import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { NpvProfile } from '../data/npvProfile';
let ListComponent = class ListComponent {
    constructor(data, modalService, spinner) {
        this.data = data;
        this.modalService = modalService;
        this.spinner = spinner;
        this.data.obsNpvProfile.subscribe(np => this.npvProfile = np);
    }
    ngOnInit() {
        this.spinner.show();
        this.data.getSavedNpvProfiles().subscribe((data) => {
            // TODO: sort list
            this.npvProfileList = data;
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            window.alert(error); // TODO: replace with MessageBox component
        });
    }
    onProfileSelected(value) {
        this.spinner.show();
        this.data.getNpvProfile(value.id).subscribe((data) => {
            this.data.syncCurrentNpvProfile(data);
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            window.alert(error); // TODO: replace with MessageBox component
        });
    }
    onSave() {
        if (this.npvProfile.id) {
            this.spinner.show();
            // to UPDATE
            this.data.updateNpvProfile(this.npvProfile).subscribe((data) => {
                this.spinner.hide();
                window.alert("Profile successfully saved");
            }, (error) => {
                this.spinner.hide();
                window.alert(error); // TODO: replace with MessageBox component
            });
        }
        else {
            this.openSaveModal();
        }
    }
    onNew() {
        this.data.syncCurrentNpvProfile(new NpvProfile());
        this.selectedNpvProfile = null;
    }
    openSaveModal() {
        this.newNpvProfileName = "";
        this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title', backdrop: 'static' }).result.then((result) => {
            if (result == "ok") {
                this.saveNewProfile();
            }
        }, (reason) => { });
    }
    saveNewProfile() {
        // to INSERT
        this.npvProfile.name = this.newNpvProfileName;
        this.spinner.show();
        this.data.addNpvProfile(this.npvProfile).subscribe((data) => {
            this.npvProfile.id = data.id;
            this.data.syncCurrentNpvProfile(this.npvProfile);
            this.npvProfileList.push(data);
            // TODO: re-sort list
            this.spinner.hide();
            window.alert("Profile successfully saved");
        }, (error) => {
            this.spinner.hide();
            window.alert(error); // TODO: replace with MessageBox component
        });
    }
};
tslib_1.__decorate([
    ViewChild('content', { static: false })
], ListComponent.prototype, "content", void 0);
ListComponent = tslib_1.__decorate([
    Component({
        selector: 'npv-list',
        templateUrl: 'list.component.html',
        styleUrls: ['./list.component.scss']
    })
], ListComponent);
export { ListComponent };
//# sourceMappingURL=list.component.js.map