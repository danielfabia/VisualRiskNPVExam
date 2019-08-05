import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
//import { catchError, map, tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { NpvProfile } from './data/npvProfile';
let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.url = environment.apiBaseUrl;
        this.npvProfileShared = new BehaviorSubject(new NpvProfile());
        this.obsNpvProfile = this.npvProfileShared.asObservable();
        let npvProfile = new NpvProfile();
        this.syncCurrentNpvProfile(npvProfile);
    }
    syncCurrentNpvProfile(np) {
        this.npvProfileShared.next(np);
    }
    computeNpvProfiles(np) {
        let params = new HttpParams()
            .append("InitialCost", np.initialCost ? np.initialCost.toString() : null)
            .append("UpperBoundRate", np.upperBoundRate ? np.upperBoundRate.toString() : null)
            .append("LowerBoundRate", np.lowerBoundRate ? np.lowerBoundRate.toLocaleString() : null)
            .append("RateIncrement", np.rateIncrement ? np.rateIncrement.toString() : null);
        np.values.forEach((v) => { params = params.append("Values", v ? v.toString() : null); });
        return this.http.get(this.url + "/Compute/npv-profile", { params: params })
            .pipe(catchError(this.handleError));
    }
    getSavedNpvProfiles() {
        return this.http.get(this.url + "/NpvProfile/Names")
            .pipe(catchError(this.handleError));
    }
    getNpvProfile(id) {
        return this.http.get(this.url + "/NpvProfile/" + id)
            .pipe(catchError(this.handleError));
    }
    addNpvProfile(np) {
        return this.http.post(this.url + "/NpvProfile", np)
            .pipe(catchError(this.handleError));
    }
    updateNpvProfile(np) {
        return this.http.put(this.url + "/NpvProfile", np)
            .pipe(catchError(this.handleError));
    }
    handleError(error) {
        console.log(error); // log to console 
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // server-side error
            if (error.status == 400) {
                console.log(error.error instanceof String);
                if (error.error instanceof String)
                    errorMessage = error.error;
                else {
                    // parse the ModelState json
                    var errors = [];
                    for (let p in error.error) {
                        errors.push(...error.error[p]);
                    }
                    errorMessage = `Errors:\n${errors.join("\n")}`;
                }
            }
            else
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }
};
DataService = tslib_1.__decorate([
    Injectable()
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map