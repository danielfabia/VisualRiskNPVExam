import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from "ngx-spinner";
import { DataService } from '../data.service';
import { NpvProfile } from '../data/npvProfile';

@Component({
    selector: 'npv-list',
    templateUrl: 'list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {

    private npvProfile: NpvProfile;
    npvProfileList: NpvProfile[];
    selectedNpvProfile: NpvProfile;
    newNpvProfileName: string;

    @ViewChild('content', { static: false }) private content: TemplateRef<any>;

    constructor(private data: DataService, private modalService: NgbModal, private spinner: NgxSpinnerService) {
        this.data.obsNpvProfile.subscribe(np => this.npvProfile = np);
    }

    ngOnInit() {
        this.spinner.show();

        this.data.getSavedNpvProfiles().subscribe(
            (data) => {
                // TODO: sort list
                this.npvProfileList = data;

                this.spinner.hide();
            },
            (error) => {
                this.spinner.hide();
                window.alert(error); // TODO: replace with MessageBox component
            }
        );
    }

    onProfileSelected(value: NpvProfile) {
        this.spinner.show();

        this.data.getNpvProfile(value.id).subscribe(
            (data) => {
                this.data.syncCurrentNpvProfile(data);

                this.spinner.hide();
            },
            (error) => {
                this.spinner.hide();
                window.alert(error); // TODO: replace with MessageBox component
            }
        )
    }

    onSave() {
        if (this.npvProfile.id) {
            this.spinner.show();

            // to UPDATE
            this.data.updateNpvProfile(this.npvProfile).subscribe(
                (data) => {
                    this.spinner.hide();
                    window.alert("Profile successfully saved");
                },
                (error) => {
                    this.spinner.hide();
                    window.alert(error); // TODO: replace with MessageBox component
                }
            );
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
        this.data.addNpvProfile(this.npvProfile).subscribe(
            (data) => {
                this.npvProfile.id = data.id;
                this.data.syncCurrentNpvProfile(this.npvProfile);

                this.npvProfileList.push(data);
                // TODO: re-sort list

                this.spinner.hide();
                window.alert("Profile successfully saved");
            },
            (error) => {
                this.spinner.hide();
                window.alert(error); // TODO: replace with MessageBox component
            }
        );
    }
}