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

        this.syncCurrentNpvProfile(npvProfile);
    }

    syncCurrentNpvProfile(np: NpvProfile) {
        this.npvProfileShared.next(np);
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

    getSavedNpvProfiles(): Observable<NpvProfile[]> {
        return this.http.get<NpvProfile[]>(this.url + "/NpvProfile/Names");
    }

    getNpvProfile(id: number): Observable<NpvProfile> {
        return this.http.get<NpvProfile>(this.url + "/NpvProfile/" + id);
    }

    addNpvProfile(np: NpvProfile): Observable<NpvProfile> {
        let params = new HttpParams()
            .append("name", np.name);

        return this.http.post<NpvProfile>(this.url + "/NpvProfile", np, { params: params });
    }

    updateNpvProfile(np: NpvProfile): Observable<NpvProfile> {
        return this.http.put<NpvProfile>(this.url + "/NpvProfile", np);
    }

    /**
      * Handle Http operation that failed.
      * Let the app continue.
      * @param operation - name of the operation that failed
      * @param result - optional value to return as the observable resultl8'[pk;'
      * ]
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