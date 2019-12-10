import { Component, OnInit } from '@angular/core';
import { DayLightService } from '../services/daylight.service';

@Component({
  selector: 'app-daylight',
  templateUrl: './daylight.component.html',
  styleUrls: ['./daylight.component.scss']
})
export class DaylightComponent implements OnInit {
  sunrise: any;
  sunset: any;
  
  constructor(private dayLightService: DayLightService ) { }

  ngOnInit() {
    this.dayLightService.getData().subscribe(res => {
      console.log(res);
      this.sunrise = Date.parse(res[3]['sunrise']);
      this.sunset = Date.parse(res[1]['sunset']);
    })
  }

}
