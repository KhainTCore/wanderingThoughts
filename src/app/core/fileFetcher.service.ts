import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { of } from "rxjs/observable/of";
import { MatSnackBar } from "@angular/material";

@Injectable()
export class FileFetcherService {

    private fetFilesUrl = "api/fetchFiles";
    private albumsUrl = `${this.fetFilesUrl}/albums`;
    private albumMetaUrl = `${this.fetFilesUrl}/albumMeta`;
    private codeUrl = `${this.fetFilesUrl}/code`;
    private codeListUrl = `${this.fetFilesUrl}/codeList`;
    private fileListUrl = `${this.fetFilesUrl}/fileList`;
    private fileUrl = `${this.fetFilesUrl}/file`;
    private staticUrl = `${this.fetFilesUrl}/staticFiles`;

    constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

    fetchAlbums(): Observable<any> {
        return this.http.get<any>(this.albumsUrl).pipe(
            map((albums) => { return albums.albums; }),
            catchError(this.handleError("Fetch Albums", []))
        );
    }

    fetchAlbumMeta(album: string): Observable<any> {
        return this.http.get<any>(this.albumMetaUrl, {params: {album}}).pipe(
            map((file) => { return file.file; }),
            catchError(this.handleError("FetchAlbumMeta", {}))
        );
    }

    fetchCode(component: string): Observable<any> {
        return this.http.get<any>(this.codeUrl, {params: {component}}).pipe(
            catchError(this.handleError("FetchAlbums", {}))
        );
    }

    fetchCodeList(): Observable<string[]> {
        return this.http.get<string[]>(this.codeListUrl);
    }

    fetchList(type: string): Observable<string[]> {
        return this.http.get<string[]>(this.fileListUrl, {
            params: { type }
        });
    }

    fetchFile(type: string, title: string): Observable<object> {
        return this.http.get(this.fileUrl, {
            params: { type, title }, 
        }).pipe(
            catchError(this.handleError("Fetch File", {file: {}}))
        );
    }

    fetchStaticPage(page: string): Observable<object> {
        return this.http.get(this.staticUrl, {params: {page, type: "st"}}).pipe(
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
