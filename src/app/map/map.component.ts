import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../services/flickr.service';
import { CityBikesService } from 'src/app/services/city-bikes.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  DEFAULT_MAP_ZOOM = 12;
  DEFAULT_MAP_LAT = 56.8770413;
  DEFAULT_MAP_LNG = 14.8092744;

  markers: Array<any> = [];
  bikePins: any[] = [];

  constructor(private flickrService: FlickrService, private cityBikesService : CityBikesService) { }

  ngOnInit() {
    this.initFlickr();
    this.getCityBikesData();
  }

  initFlickr() {
    const args: Object = {lat: 56.8770413, lon: 14.8092744, radius: 4, per_page: 10000, has_geo: true};

    this.flickrService.search(args)
      .subscribe((response) => {
          const items = response['photos']['photo'];

          for (const item of items) {
            this.getLocationFromPhotos(item, item.id);
          }
        },
        error => console.error(error)
      );
  }

  getLocationFromPhotos(item, id) {
    this.flickrService.getLocation(id)
      .subscribe((response) => {
          this.appendToMap(item, response);
        },
        error => console.error(error)
      );
  }

  appendToMap(item, geoInfo) {
    const lati = Number(geoInfo.photo.location.latitude);
    const langi =  Number(geoInfo.photo.location.longitude);
    const imgSrc = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_q.jpg';

    const marker = {lat: lati, lang: langi, title: item.title, img: imgSrc};
    this.markers.push(marker);
  }

  getCityBikesData() {
    this.cityBikesService.getData().subscribe((locations : any[]) => {
       locations.forEach(location => {
         this.createBikePin(location);
       });
    });
   }
 
   createBikePin(location) {
     const pin = {
       lat: Number(location.lat / 1000000), 
       lng: Number(location.lng / 1000000),
       station: location.name,
       pinIcon: 'assets/bike.png',
       free: location.free,
       bikes: location.bikes  
     };
     this.bikePins.push(pin);
   }

}
