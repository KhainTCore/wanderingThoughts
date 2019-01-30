import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject ,  of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { MatSnackBar } from "@angular/material";

@Injectable()
export class CommonService {

    private _version: string = "x.x.x";

    public watchVersion: Subject<string> = new Subject<string>();

    constructor(private http: HttpClient) { 
        this.getVersion().subscribe((version) => {
            this._version = version; 
            this.watchVersion.next(version); 
        });
    }

    getVersion(): Observable<any> {
        return this.http.get<any>("api/common/version");
    }

    get version(): string {
        return this._version;
    }
}
