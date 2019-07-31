import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { NpvProfile } from './data/npvProfile';


@Injectable()
export class DataService {

    private url = environment.apiBaseUrl;
    public npvProfile: NpvProfile;

    constructor(private http: HttpClient) {
        this.npvProfile = new NpvProfile();
    }

    getNpvProfiles(np: NpvProfile): Observable<NpvProfile> {
        let params = new HttpParams()
            .append("InitialValue", np.initialCost.toString())
            .append("UpperBoundRate", np.upperBoundRate.toString())
            .append("LowerBoundRate", np.lowerBoundRate.toLocaleString())
            .append("RateIncrement", np.rateIncrement.toString());
        np.values.forEach((v: Number) => { params = params.append("Values", v.toString()); });

        return this.http.get<NpvProfile>(this.url + "/Compute/npv-profile", { params: params });
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