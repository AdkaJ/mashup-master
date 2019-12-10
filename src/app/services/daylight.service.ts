import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Response} from '@angular/http';
import { throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DayLightService {
    private today = this.getDateFormat()
    private dailightUrl: string = "https://sun.p.rapidapi.com/api/sun/";
    private options : any;
    
    constructor(private http: HttpClient) {
        this.options = {
            query:{
                "latitude": "56.8790",
                "longitude": "14.8059",
                "date": this.today
            },
            headers:{
                "x-rapidapi-host": "sun.p.rapidapi.com",
                "x-rapidapi-key": "0839111e8cmsh486281869134a8fp1eecd3jsn3a0eb6132322"
            }
        }
    }

  
    getData() {
        return this.http.get(this.dailightUrl, this.options).pipe(
            catchError(this.handleError)
        );
    }

    getDateFormat() : string {
        let today = new Date();
        let month = (today.getMonth() < 9) ? `0` : '' + `${today.getMonth() + 1}`; 
        let day = '31'//(this.today.getDay() < 9) ? `0` : '' + `${this.today.getDay()}`; 
        return `${today.getFullYear}-${month}-${day}`;
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






