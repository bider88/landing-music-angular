import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ItemModel } from 'src/app/models/item.model';
import { TrackSelectedModel } from 'src/app/models/track-selected.model';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  musicForm: FormGroup;
  tracks: ItemModel[];
  loading: boolean;
  trackSelected: TrackSelectedModel = {
    image: 'https://i.scdn.co/image/ab67616d0000b2738b56fd8fb9f486c7ebd2303a',
    name: 'Harder, Better, Faster, Stronger',
    artist: 'Daft Punk',
    preview: 'https://p.scdn.co/mp3-preview/92a04c7c0e96bf93a1b1b1cae7dfff1921969a7b?cid=555776939cf64ea6b39915cf4d5d875d'
  } as TrackSelectedModel;

  constructor(
    private musicService: MusicService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.onSubmit();
  }

  onSubmit() {
    const { search } = this.musicForm.value;
    if (search) {
      this.searchTrack(search);
    }
  }

  searchTrack(search: string) {
    this.loading = true;
    this.musicService.searchTrack(search).subscribe(
      tracks => {
        this.tracks = tracks;
        this.loading = false;
      },
      error => {
        console.error(error);
        this.loading = false;
      }
    );

  }

  listenTrack(track: ItemModel) {
    this.trackSelected = {
      image: track.album.images[0].url,
      name: track.name,
      artist: track.artists[0].name,
      preview: track.preview_url
    } as TrackSelectedModel;
  }

  buildForm() {
    this.musicForm = new FormGroup({
      search: new FormControl('Daft Punk')
    });
  }

}
