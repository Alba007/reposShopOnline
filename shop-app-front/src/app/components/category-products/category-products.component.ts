import {Component, OnInit} from '@angular/core';
import {GetDataService} from '../../services/get-data.service';
import {Category} from '../../models/category';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {CategoriesAddComponent} from '../categories-add/categories-add.component';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageComponent} from '../message/message.component';
import {SocketService} from "../../services/socket.service";
import {UpdateNotifyService} from "../../services/update-notify.service";

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {
  path = 'categories';
  categories: Category[] = [];
  showDelete = false;
  user = true;

  constructor(private getDataService: GetDataService,
              public dialog: MatDialog,
              private  route: Router,
              private socketService: SocketService,
              private updateService: UpdateNotifyService) {
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('user')).role === 'Admin') {
      this.showDelete = true;
    }
    this.categories = [];
    this.getDataService.getAllCategory().subscribe(res => {
      res.map(t => {
        this.categories.push(t);
      });
      localStorage.setItem('categories', JSON.stringify(this.categories));
    });

    this.getDataService.getAllProductsByCategoryId('2').subscribe(res => {
    });
    this.updateService.notyfyForCategory.subscribe(res => {
      this.updateDataFromSocket(res);
    });
  }

  addCategory(category) {
    if (this.showDelete) {
      this.dialog.open(CategoriesAddComponent, {
        data: category,
        height: '40%',
        width: '30%'
      });
    }
  }

  goToProductsByCatrgory(id) {
    this.route.navigate(['/products'], {queryParams: {id}});

  }

  deleteCategory(id) {
    this.dialog.open(MessageComponent, {
        data: 'Are you sure you want to delete?',
        height: '15%',
        width: '30%'
      }
    ).afterClosed().subscribe(res => {
      if (res) {
        this.getDataService.deleteCategory(id).subscribe(res => {
        });
      }
    });
  }

  updateDataFromSocket(newData) {
     this.categories.push(newData)
  }
}
