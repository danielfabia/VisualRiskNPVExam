import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NpvTableComponent } from './npv-table/npv.table.component';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        NpvTableComponent,
        ListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgbModule
    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
