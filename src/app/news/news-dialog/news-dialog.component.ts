import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-dialog',
  templateUrl: './news-dialog.component.html',
  styleUrls: ['./news-dialog.component.scss']
})
export class NewsDialogComponent implements OnInit {
  allNews: any[] = [];
  savedNews: any[] = [];
  constructor(public dialogRef: MatDialogRef<NewsDialogComponent>,@Inject(MAT_DIALOG_DATA) data, private newsService: NewsService) {
    this.allNews = data.data;
    this.newsService.getStoredNews().subscribe(res => {
      console.log(res);
    });
   }

  ngOnInit() {
   
  }

  onCloseClick() {
    this.dialogRef.close('closing modal window');
  }

  onSaveClick() {

  }
}
