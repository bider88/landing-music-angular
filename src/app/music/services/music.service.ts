import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/models/response.model';
import { map } from 'rxjs/operators';
import { ItemModel } from 'src/app/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(
    private http: HttpClient
  ) { }

  searchTrack(search: string, offset = 0): Observable<ItemModel[]> {
    const type = 'track';
    return this.http.get<ResponseModel>(`${environment.apiMusic}search?q=${search}&type=${type}&offset=${offset}`)
    .pipe(
      map( res => res.tracks.items)
    );
  }
}
