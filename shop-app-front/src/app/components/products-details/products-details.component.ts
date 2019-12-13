import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {GetDataService} from '../../services/get-data.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  formGroup: FormGroup;
  categories = [];
  base64textString: string;
  category;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private ref: MatDialogRef<ProductsDetailsComponent>,
              private getDataService: GetDataService) {
  }

  ngOnInit() {
    console.log(this.data);
    this.categories = JSON.parse(localStorage.getItem('categories'));
    console.log(this.categories);
    JSON.parse(localStorage.getItem('categories'));
    if (this.data !== null) {
      this.formGroup = new FormGroup({
        title: new FormControl(this.data.title, Validators.required),
        description: new FormControl(this.data.description, Validators.required),
        review: new FormControl(this.data.review, Validators.required),
        specification: new FormControl(this.data.specification, Validators.required),
        category: new FormControl(this.data.category_id, Validators.required)
      });
    } else {
      this.formGroup = new FormGroup({
        title: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        review: new FormControl('', Validators.required),
        specification: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required)
      });
    }


  }

  save() {
    if (this.data !== null) {
      const dataToBeEdited = {
        id: this.data.id,
        title: this.formGroup.getRawValue().title,
        description: this.formGroup.getRawValue().description,
        review: this.formGroup.getRawValue().review,
        specification: this.formGroup.getRawValue().specification,
        image: this.base64textString,
        category_id: this.formGroup.getRawValue().category
      };
      this.getDataService.editProduct(dataToBeEdited).subscribe(res => {
        this.ref.close();
      });
    } else {
      const dataToBeEdited = {
        title: this.formGroup.getRawValue().title,
        description: this.formGroup.getRawValue().description,
        review: this.formGroup.getRawValue().review,
        specification: this.formGroup.getRawValue().specification,
        image: this.base64textString,
        category_id: this.formGroup.getRawValue().category
      };
      this.getDataService.addProducts(dataToBeEdited).subscribe(res => {
        this.ref.close();
      });
    }
  }

  uplaod(file: HTMLInputElement) {
    file.click();
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

}
