import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { of, BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';
import { NpvProfile } from './data/npvProfile';
let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.url = environment.apiBaseUrl;
        this.npvProfileShared = new BehaviorSubject(new NpvProfile());
        this.obsNpvProfile = this.npvProfileShared.asObservable();
        let npvProfile = new NpvProfile();
        npvProfile.initialCost = 10000;
        npvProfile.upperBoundRate = 2.00;
        npvProfile.lowerBoundRate = 1.00;
        npvProfile.rateIncrement = 0.25;
        //npvProfile.values.push(1000);
        //npvProfile.values.push(2000);
        //npvProfile.values.push(3000);
        //npvProfile.values.push(1000);
        //npvProfile.values.push(5000);
        //npvProfile.values.push(3000);
        //npvProfile.values.push(1000);
        //npvProfile.values.push(2000);
        //npvProfile.values.push(3000);
        this.syncCurrentNpvProfile(npvProfile);
    }
    computeNpvProfiles(np) {
        let params = new HttpParams()
            .append("InitialCost", np.initialCost.toString())
            .append("UpperBoundRate", np.upperBoundRate.toString())
            .append("LowerBoundRate", np.lowerBoundRate.toLocaleString())
            .append("RateIncrement", np.rateIncrement.toString());
        np.values.forEach((v) => { params = params.append("Values", v.toString()); });
        return this.http.get(this.url + "/Compute/npv-profile", { params: params });
    }
    syncCurrentNpvProfile(np) {
        this.npvProfileShared.next(np);
    }
    /**
      * Handle Http operation that failed.
      * Let the app continue.
      * @param operation - name of the operation that failed
      * @param result - optional value to return as the observable result
    */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    }
};
DataService = tslib_1.__decorate([
    Injectable()
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map