import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { of } from "rxjs/observable/of";
import { MatSnackBar } from "@angular/material";

@Injectable()
export class FileFetcherService {

    private fetFilesUrl = "api/fetchFiles";
    private fileListUrl = `${this.fetFilesUrl}/fileList`;
    private fileUrl = `${this.fetFilesUrl}/file`;
    private staticUrl = `${this.fetFilesUrl}/staticFiles`;

    constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

    fetchList(type: string): Observable<string[]> {
        return this.http.get<string[]>(this.fileListUrl, {
            params: { type }
        });
    }

    fetchFile(type: string, title: string): Observable<object> {
        return this.http.get(this.fileUrl, {
            params: { type, title }, 
        }).pipe(
            tap((story) => { this.log("Story Fetched", null, 4000); }),
            catchError(this.handleError("Fetch File", {file: {}}))
        );
    }

    fetchStaticPage(page: string): Observable<object> {
        return this.http.get(this.staticUrl, {params: {page, type: "st"}}).pipe(
            tap((html) => { this.log(`Static HTML fetched for Home Page`, null, 4000); }),
            catchError(this.handleError("Fetch Page Information", {file: {}}))
        );
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
