import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-image-expand',
  templateUrl: './image-expand.component.html',
  styleUrls: ['./image-expand.component.css']
})
export class ImageExpandComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private ref: MatDialogRef<ImageExpandComponent>) {
  }

  ngOnInit() {
  }

}
