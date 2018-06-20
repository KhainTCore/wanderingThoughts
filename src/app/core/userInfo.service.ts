import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { of } from "rxjs/observable/of";
import { MatSnackBar } from "@angular/material";

@Injectable()
export class UserInfoService {

    private userInfoUrl = "api/userInfo";
    private mailingListUrl = `${this.userInfoUrl}/saveToMailingList`;
    

    constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

    saveToMailingList(email: string) {
        // If this call isn't subscribed to Express never gets recieves the request. Why?
        this.http.post<any>(this.mailingListUrl, {email}).pipe(
            tap(() => { this.log("Email has been added to the Mailing List.", null, 4000); }),
            catchError(
                this.handleError("saveToMailingList", null)
            )
        ).subscribe(() => {});
    }

    private log(msg: string, actions?: string, duration?: number): void {
        this.snackBar.open(msg, actions, {duration});
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        // console.error(error); // log to console instead
    
        this.log(
            `${operation} failed: ${error.error ? error.error.message : "500 - Internal Server Error"}`,
            "Dismiss",
            0
        );
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
        };
    }
}
