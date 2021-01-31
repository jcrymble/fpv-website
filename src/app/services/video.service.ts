import { Injectable } from '@angular/core';
import { VideoI, VIDEOS } from './video.data';

@Injectable({
    providedIn: 'root'
})
export class VideoService {

    private videos: Array<VideoI> = VIDEOS;

    get(id: number): VideoI {
        return this.videos.find(v => v.id === id);
    }

    getAll(): VideoI[] {
        return this.videos;
    }
}
