import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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

    constructor(private data: DataService, private modalService: NgbModal) {
        this.data.obsNpvProfile.subscribe(np => this.npvProfile = np);
    }

    ngOnInit() {
        this.data.getSavedNpvProfiles().subscribe((data) => {
            // TODO: sort list
            this.npvProfileList = data;
        });
    }

    onProfileSelected(value: NpvProfile) {
        this.data.getNpvProfile(value.id).subscribe((data) => {
            this.data.syncCurrentNpvProfile(data);
        })
    }

    onSave() {
        if (this.npvProfile.id) {
            // to UPDATE
            this.data.updateNpvProfile(this.npvProfile).subscribe((data) => {
                // TODO: show success message
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

        this.data.addNpvProfile(this.npvProfile).subscribe((data) => {
            this.npvProfile.id = data.id;
            this.data.syncCurrentNpvProfile(this.npvProfile);

            this.npvProfileList.push(data);
            // TODO: re-sort list
        });
    }
}