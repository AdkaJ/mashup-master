import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Response } from '@angular/http';
import { throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

    constructor(private http: HttpClient) { }
  
    getData() {
        return this.http.get("https://newsapi.org/v2/top-headlines?country=se&apiKey=a1d092c52a4a418eae52981fa1232264",{}).pipe(
            catchError(this.handleError)
        );
    }

    getStoredNews() {
        return this.http.get("https://mash-up-vaxjo.herokuapp.com/favoritenews", {}).pipe(
            catchError(this.handleError)
        )
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return observableThrowError(errMsg);
    }
}






