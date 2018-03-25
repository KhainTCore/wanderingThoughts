import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { of } from "rxjs/observable/of";

@Injectable()
export class FileFetcherService {

    private fetFilesUrl = "api/fetchFiles";
    private poemUrl = `${this.fetFilesUrl}/fetchPoem`;
    private poemListUrl = `${this.fetFilesUrl}/poemList`;
    private storyUrl = `${this.fetFilesUrl}/story`;
    private storyListUrl = `${this.fetFilesUrl}/storyList`;

    constructor(private http: HttpClient) { }

    fetchStory(storyName: string): Observable<object> {
        return this.http.get(this.storyUrl, {
            params: { storyName }, 
        }).pipe(
            tap((story) => { console.log("Story Fetched");}),
            catchError(this.handleError("fetchStory", []))
        );
    }

    fetchStoryList(): Observable<string[]> {
        return this.http.get<string[]>(this.storyListUrl);
    }

    fetchPoem(poemName: string): Observable<object> {
        return this.http.get<object>(this.poemUrl, {
            params: { poemName }
        });
    }

    fetchPoemList(): Observable<string[]> {
        return this.http.get<string[]>(this.poemListUrl);
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
