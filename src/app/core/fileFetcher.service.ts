import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class FileFetcherService {

    private fetFilesUrl = "api/fetchFiles";
    private poemUrl = `${this.fetFilesUrl}/fetchPoem`;
    private poemListUrl = `${this.fetFilesUrl}/poemList`;
    private storyUrl = `${this.fetFilesUrl}/story`;
    private storyListUrl = `${this.fetFilesUrl}/storyList`;

    constructor(private http: HttpClient) { }

    fetchStory(storyName: string): Observable<object> {
        // Need to figure out how to send param
        return this.http.get<object>(this.storyUrl, {
            params: { storyName }
        });
    }

    fetchStoryList(): Observable<string[]> {
        return this.http.get<string[]>(this.storyListUrl);
    }

    fetchPoem(poemName: string): Observable<object> {
        return this.http.get<object>(this.poemUrl);
    }

    fetchPoemList(): Observable<string[]> {
        return this.http.get<string[]>(this.poemListUrl);
    }

}
