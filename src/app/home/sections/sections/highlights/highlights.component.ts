import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/navigation/navigation.service';
import { VideoI } from 'src/app/services/video.data';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit {

  constructor(
    private videoService: VideoService,
    private navigationService: NavigationService
  ) { }

  highlights: Array<VideoI> = this.videoService.getHighlights();

  ngOnInit(): void { }

  backgroundImageString(index: number): string {
    return `/assets/gallery/${this.indexToString(index)}.jpg`;
  }

  indexToString(index: number): string {
    const words = ['first', 'second', 'third'];
    return words[index];
  }

  openViewer(video: VideoI): void {
    this.navigationService.navigate({icon: '', navigateTo: `gallery/viewer/${video.id}`, displayName: 'Viewer'});
  }

}
