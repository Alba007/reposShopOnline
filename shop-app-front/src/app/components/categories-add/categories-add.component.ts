import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GetDataService} from '../../services/get-data.service';
import {SocketService} from '../../services/socket.service';

@Component({
  selector: 'app-categories-add',
  templateUrl: './categories-add.component.html',
  styleUrls: ['./categories-add.component.css']
})
export class CategoriesAddComponent implements OnInit {
  formGroup: FormGroup
  base64textString: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<CategoriesAddComponent>,
              private getDataService: GetDataService,
              private socketService: SocketService) {
  }

  ngOnInit() {
    let title = '';
    let description = '';
    let image = '';
    if (this.data !== null) {
      title = this.data.title;
      description = this.data.description;
      image = this.data.image;
    }

    this.formGroup = new FormGroup({
      title: new FormControl(title, Validators.required),
      description: new FormControl(description, Validators.required),
      image: new FormControl(image, Validators.required)
    });
  }

  save() {
    if (this.data !== null) {
      const dataToSave = {
        id: this.data.id,
        title: this.formGroup.getRawValue().title,
        description: this.formGroup.getRawValue().description,
        image: this.base64textString
      };
      this.getDataService.editCategory(dataToSave).subscribe(res => {
        this.dialogRef.close();
      });
    } else {
      this.getDataService.addCategory(this.formGroup.getRawValue()).subscribe(res => {
        this.dialogRef.close();
      });
    }
  }

  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }

  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
  }

  uplaod(file: HTMLInputElement) {
    file.click();
  }

  updateDataFromSocket() {
  }
}
