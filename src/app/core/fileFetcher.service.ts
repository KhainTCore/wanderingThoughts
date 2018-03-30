import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { of } from "rxjs/observable/of";

@Injectable()
export class FileFetcherService {

    private fetFilesUrl = "api/fetchFiles";
    private fileListUrl = `${this.fetFilesUrl}/fileList`;
    private fileUrl = `${this.fetFilesUrl}/file`;

    constructor(private http: HttpClient) { }

    fetchList(type: string): Observable<string[]> {
        return this.http.get<string[]>(this.fileListUrl, {
            params: { type }
        });
    }

    fetchFile(type: string, title: string): Observable<object> {
        return this.http.get(this.fileUrl, {
            params: { type, title }, 
        }).pipe(
            tap((story) => { console.log("Story Fetched"); }),
            catchError(this.handleError("fetchStory", []))
        );
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
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
        };
    }
}
