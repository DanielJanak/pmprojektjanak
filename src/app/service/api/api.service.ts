import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from 'src/environments/environment';

export interface ApiResult {
    status: string;
    message: string;  //tady tohle je url obrázku z requestu any[] jsem tam napsal podle videa 24:30
}

@Injectable({
    providedIn:"root"
})

export class ApiService {
    constructor (private http:HttpClient) {} //toto je tam proto aby jsme mohli extractit věci z API

    getRandomPhoto() : Observable<ApiResult> {
        return this.http.get<ApiResult>(
            `${environment.api.Url}/api/breeds/image/random`);  //zde se snažíme dostat URL pro APINU kterou se snažím používat  //alt 96
    }

    getOdrudyPsu() : Observable<ApiResult> {
        return this.http.get<ApiResult>(
            `${environment.api.Url}/api/breeds/list/all`);
    }

    /**
     * get photos from api
     * 
     * @param latitude
     * 
     * @param longitude
     */
}