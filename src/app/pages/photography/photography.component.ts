import { Component, OnInit } from "@angular/core";
import { Item } from "../../shared/cardCarousel/cardCarousel.component";
import { FileFetcherService } from "../../core";

import * as Prism from "prismjs";

@Component({
    selector: "photography",
    styleUrls: ["../../app.component.css", "./photography.component.css"],
    templateUrl: "./photography.component.html"
})

export class PhotographyComponent implements OnInit {

    private defaultDescription: string = "# Description\nPicture some good words here, and not the empty because I was to lazy to write some";

    private albumIcons: object = {left: "arrowBack", right: "arrowForward"};
    private albums: Album[] = [];
    private zoomIcon: object = {icon: "fullscreen", class: "accent-icon"};
    private albumDescription: string = this.defaultDescription;

    constructor(private fileFetcherService: FileFetcherService) { }

    ngOnInit() {
        this.fileFetcherService.fetchAlbums().subscribe((albums: {photos: string[]}[]) => {
            for (let album of albums) {
                let photos: Item[] = [];
                let albumName: string = Object.keys(album)[0];
                let state: string = "viewing";
                for (let photo of album[albumName]) {
                    photos.push(new Item(photo, null, state));
                    state = "unviewed";
                }
                this.albums.push(new Album(photos, albumName));
            }
        });

        this.albumDescription = Prism.highlight(this.defaultDescription, Prism.languages.markdown);
    }

    focusEvent(album: Album) {
        this.fileFetcherService.fetchAlbumMeta(album.title).subscribe((meta: string) => {
            meta = meta || this.defaultDescription;
            this.albumDescription = Prism.highlight(meta, Prism.languages.markdown);
        });
    }
}

class Album {
    public height: number;
    public photos: Item[];
    public subtitle: string;
    public title: string;
    public width: number;

    constructor(photos: Item[], title?: string, subtitle?: string, height?: number, width?: number) { 
        this.height = height;
        this.photos = photos;
        this.subtitle = subtitle;
        this.title = title;
        this.width = width;
    }
}
