import { Component, OnInit } from "@angular/core";
import { Item } from "../../shared/cardCarousel/cardCarousel.component";
import { FileFetcherService } from "../../core";

@Component({
    selector: "photography",
    styleUrls: ["../../app.component.css", "./photography.component.css"],
    templateUrl: "./photography.component.html"
})

export class PhotographyComponent implements OnInit {

    private albumIcons: object = {left: "arrowBack", right: "arrowForward"};
    private albums: Album[] = [];

    constructor(private fileFetcherService: FileFetcherService) { }

    ngOnInit() {
        this.fileFetcherService.fetchAlbums().subscribe((albums: {photos: string[]}[]) => {
            for (let album of albums) {
                let photos: Item[] = [];
                let albumName: string = Object.keys(album)[0];
                for (let photo of album[albumName]) {
                    photos.push(new Item(photo, null, "unviewed"));
                }
                this.albums.push(new Album(photos, albumName));
            }
        });
    }

    focusEvent(album: Album) {
        album.height = 600;
        album.width = 800;
    }

    lostFocusEvent(album: Album) {
        album.height = 300;
        album.width = 500;
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
