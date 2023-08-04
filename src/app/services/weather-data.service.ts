import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { createUrlForCurrentAndForecast, createUrlForAvailableCities } from "../helpers/url-helper";
import { Observable, interval, switchMap } from "rxjs";

@Injectable()
export class WeahterDataService {
    constructor(public readonly http: HttpClient){}

    public getAvailableCities(query: string) : Observable<any> {
        const url = createUrlForAvailableCities(query)
        return this.http.get(url)
    }

    public getCurrentWeatherDataAndForecast(query: string) : Observable<any> {
        const url = createUrlForCurrentAndForecast(query)
        return this.http.get(url)
    }


}