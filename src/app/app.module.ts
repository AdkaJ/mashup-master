import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { WeatherComponent } from './weather/weather.component';
import { CareerComponent } from './career/career.component';
import { CareerResultComponent } from './career/career-result/career-result.component';
import { NewsComponent } from './news/news.component';
import { NewsDialogComponent } from './news/news-dialog/news-dialog.component';
import { DaylightComponent } from './daylight/daylight.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherComponent,
    CareerComponent,
    CareerResultComponent,
    NewsComponent,
    NewsDialogComponent,
    DaylightComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDs0WJS-0UQ8F3N-8qhxyPXDniFVmS0uHQ'
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  entryComponents: [CareerResultComponent, NewsDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
