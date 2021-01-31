import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';
import { VideoI } from '../services/video.data';
import { VideoService } from '../services/video.service';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    images: VideoI[];

    constructor(
        private navigationService: NavigationService,
        private videoService: VideoService
    ) { }

    ngOnInit(): void {
        this.images = this.videoService.getAll();
    }

    openImage(id: string): void {
        this.navigationService.navigate({icon: '', navigateTo: `gallery/viewer/${id}`, displayName: 'Viewer'});
    }

}
