import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: '<messagebox></messagebox>',
    templateUrl: 'messagebox.component.html',
    styleUrls: ['./messagebox.component.scss']
})
export class MessageBoxComponent {

    constructor(private modalService: NgbModal) {        
    }

    ngOnInit() {
    }
}