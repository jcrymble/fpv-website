import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NavigationService } from '../navigation/navigation.service';
import { VideoI } from '../services/video.data';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video-overlay',
  templateUrl: './video-overlay.component.html',
  styleUrls: ['./video-overlay.component.scss']
})
export class VideoOverlayComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute,
        private navigationService: NavigationService,
        private videoService: VideoService
    ) { }

    currentVideo: VideoI;
    videos: VideoI[];
    idSubscription: Subscription;

    id$ = this.activatedRoute.paramMap.pipe(
        tap((params: ParamMap) => {
            this.currentVideo = this.videoService.get(+params.get('id'));
        })
    );

    get currentBackgroundUrl(): string {
        return `url(${this.currentVideo.thumbnailPath})`;
    }

    ngOnInit(): void {
        this.videos = this.videoService.getAll();
    }

    close(): void {
        this.navigationService.navigate(this.navigationService.navItems.find(n => n.navigateTo === 'gallery'));
    }

    next(): void {
        const nextIndex = (this.videos.indexOf(this.currentVideo) + 1) % this.videos.length;
        this.currentVideo = this.videos[nextIndex];
    }

    previous(): void {
        let previousIndex = this.videos.indexOf(this.currentVideo) - 1;
        if (previousIndex < 0) {
            previousIndex = this.videos.length - 1;
        }
        this.currentVideo = this.videos[previousIndex];
    }

    thumbnailClicked(video: VideoI): void {
        this.currentVideo = video;
    }

    url(): SafeResourceUrl {
        return this.videoService.getSanitisedURL(this.currentVideo);
    }

}
