import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-news-dialog',
  templateUrl: './news-dialog.component.html',
  styleUrls: ['./news-dialog.component.scss']
})
export class NewsDialogComponent implements OnInit {
  allNews: any[] = [];
  savedNews: any[] = [];
  constructor(public dialogRef: MatDialogRef<NewsDialogComponent>,@Inject(MAT_DIALOG_DATA) data) {
    this.allNews = data.data;
   }

  ngOnInit() {
  }

  onCloseClick() {
    this.dialogRef.close('closing modal window');
  }

  onSaveClick() {

  }
}
