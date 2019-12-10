import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { throwError as observableThrowError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityBikesService {
    private headers = new HttpHeaders({
        "x-rapidapi-host": "community-citybikes.p.rapidapi.com",
        "x-rapidapi-key": "0839111e8cmsh486281869134a8fp1eecd3jsn3a0eb6132322"
    });

    private options = {
        "hostname": "community-citybikes.p.rapidapi.com",
        "path": "/lundahoj.json",
        headers: this.headers
    }
    private bikesUrl: string = 'https://community-citybikes.p.rapidapi.com/lundahoj.json';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.bikesUrl, this.options).pipe(
        catchError(this.handleError)
    );
  }

  private extractData(res: Response): any {
    let body = res.json();
    return body || null;
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






