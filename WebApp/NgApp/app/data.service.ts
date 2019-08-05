import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, BehaviorSubject, throwError } from 'rxjs';
//import { catchError, map, tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
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
            .append("InitialCost", np.initialCost ? np.initialCost.toString() : null)
            .append("UpperBoundRate", np.upperBoundRate ? np.upperBoundRate.toString() : null)
            .append("LowerBoundRate", np.lowerBoundRate ? np.lowerBoundRate.toLocaleString() : null)
            .append("RateIncrement", np.rateIncrement ? np.rateIncrement.toString() : null);
        np.values.forEach((v: Number) => { params = params.append("Values", v ? v.toString() : null); });

        return this.http.get<NpvProfile>(this.url + "/Compute/npv-profile", { params: params })
            .pipe(
                catchError(this.handleError)
            );
    }

    getSavedNpvProfiles(): Observable<NpvProfile[]> {
        return this.http.get<NpvProfile[]>(this.url + "/NpvProfile/Names")
            .pipe(
                catchError(this.handleError)
            );
    }

    getNpvProfile(id: number): Observable<NpvProfile> {
        return this.http.get<NpvProfile>(this.url + "/NpvProfile/" + id)
            .pipe(
                catchError(this.handleError)
            );
    }

    addNpvProfile(np: NpvProfile): Observable<NpvProfile> {
        return this.http.post<NpvProfile>(this.url + "/NpvProfile", np)
            .pipe(
                catchError(this.handleError)
            );
    }

    updateNpvProfile(np: NpvProfile): Observable<NpvProfile> {
        return this.http.put<NpvProfile>(this.url + "/NpvProfile", np)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error) {
        console.log(error); // log to console 

        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            
            if (error.status == 400) {
                if (typeof error.error == "string")
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
}