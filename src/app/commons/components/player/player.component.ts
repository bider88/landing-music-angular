import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild, ElementRef } from '@angular/core';
import { TrackSelectedModel } from 'src/app/models/track-selected.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnChanges {

  @Input() trackSelected: TrackSelectedModel;
  selected: TrackSelectedModel = {
    image: '',
    name: '',
    artist: '',
    preview: ''
  } as TrackSelectedModel;
  @ViewChild('player', {read: ElementRef, static: false}) player: ElementRef<any>;
  showPlayer = true;
  autoplay: boolean;
  pause: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.trackSelected.firstChange) {
      if (this.selected.name !== changes.trackSelected.currentValue.name) {
        this.showPlayer = false;
        this.trackSelected = changes.trackSelected.currentValue;
        this.selected = { ...this.trackSelected };
        setTimeout(() => {
          this.showPlayer = true;
          this.autoplay = true;
          this.pause = false;
        });
      } else {
        !this.pause ? this.player.nativeElement.pause() : this.player.nativeElement.play();
        this.pause = !this.pause;
      }
    }
  }

}
