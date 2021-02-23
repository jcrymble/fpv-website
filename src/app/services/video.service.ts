import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoI, VIDEOS } from './video.data';

@Injectable({
    providedIn: 'root'
})
export class VideoService {

    private videos: Array<VideoI> = VIDEOS;

    constructor(private sanitizer: DomSanitizer) {}

    get(id: number): VideoI {
        return this.videos.find(v => v.id === id);
    }

    getAll(): VideoI[] {
        return this.videos;
    }

    getHighlights(): VideoI[] {
        const highlights = this.videos.filter(v => v.isHighlight);
        if (highlights.length !== 3) {
            throw new Error('Three highlights must be selected');
        }
        return highlights;
    }

    getSanitisedURL(video: VideoI): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(video.url);
    }
}
