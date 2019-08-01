import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { NpvProfile } from './data/npvProfile';


@Injectable()
export class DataService {

    private url = environment.apiBaseUrl;

    private npvProfileShared = new BehaviorSubject<NpvProfile>(new NpvProfile());
    public obsNpvProfile = this.npvProfileShared.asObservable();

    constructor(private http: HttpClient) {
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

    computeNpvProfiles(np: NpvProfile): Observable<NpvProfile> {
        let params = new HttpParams()
            .append("InitialCost", np.initialCost.toString())
            .append("UpperBoundRate", np.upperBoundRate.toString())
            .append("LowerBoundRate", np.lowerBoundRate.toLocaleString())
            .append("RateIncrement", np.rateIncrement.toString());
        np.values.forEach((v: Number) => { params = params.append("Values", v.toString()); });

        return this.http.get<NpvProfile>(this.url + "/Compute/npv-profile", { params: params });
    }

    syncCurrentNpvProfile(np: NpvProfile) {
        this.npvProfileShared.next(np);
    }

    /**
      * Handle Http operation that failed.
      * Let the app continue.
      * @param operation - name of the operation that failed
      * @param result - optional value to return as the observable result
    */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}