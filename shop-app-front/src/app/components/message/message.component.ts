import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private ref: MatDialogRef<MessageComponent>) {
  }

  ngOnInit() {
  }

  closeComponent(type: boolean) {
    if (type) {
      this.ref.close(true);
    } else {
      this.ref.close(false);
    }
  }

}
