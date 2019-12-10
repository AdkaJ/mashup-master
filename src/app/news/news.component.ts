import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewsDialogComponent } from './news-dialog/news-dialog.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private newsService: NewsService, public dialog: MatDialog) { }

  ngOnInit() {
   
  }

  showNews() {
    try {
      this.newsService.getData().subscribe(res => {
        console.log(res);
        this.openNewsDialog(res['articles']);
      });
    } catch {
      console.log("Couldn't load eventbrite data.");
      this.openNewsDialog([]);
    }
  }

  openNewsDialog(sourceData: any[]) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '900px';
    dialogConfig.height = '650px';

    dialogConfig.data = {
      data: sourceData
    };

    const dialogRef = this.dialog.open(NewsDialogComponent, dialogConfig);
  }

}
