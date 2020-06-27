import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  style = `mapbox://styles/mapbox/streets-v11`;
  lat: number;
  lng: number;
  zoom = 13;


  constructor() { }

  ngOnInit() {
    this.currentLocation();
    this.mapbox.accessToken = environment.mapbox.mapbox;
  }

  currentLocation() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          this.lng = pos.coords.longitude;
          this.lat = pos.coords.latitude;
          this.buildMapBox();
          this.createMarker();
        }
      );
    }
  }

  buildMapBox() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [ this.lng, this.lat ]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  createMarker() {
    const marker = new mapboxgl.Marker({
      draggable: true
    })
    .setLngLat([ this.lng, this.lat ])
    .addTo(this.map);

    marker.on('dragend', () => {
      this.lng = marker.getLngLat().lng;
      this.lat = marker.getLngLat().lat;
    });
  }

}
