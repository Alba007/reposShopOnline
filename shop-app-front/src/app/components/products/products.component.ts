import {Component, OnInit} from '@angular/core';
import {GetDataService} from '../../services/get-data.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ProductsDetailsComponent} from '../products-details/products-details.component';
import {MessageComponent} from '../message/message.component';
import {SocketService} from '../../services/socket.service';
import {UpdateNotifyService} from '../../services/update-notify.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  path = 'products';
  products: any[];
  edit = false;
  idOfProductsInChart = [];
  idUser = '';
  id: any;
  showDelete = false;
  addProductCart = true;

  constructor(private getDataService: GetDataService,
              private  route: ActivatedRoute,
              private updateService: UpdateNotifyService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.idOfProductsInChart = [];
    this.products = [];
    this.route.queryParamMap.subscribe(res => {
      if (res['params'].id) {
        this.getDataService.getAllProductsByCategoryId(res['params'].id).subscribe(rest => {
          this.products = rest;
        });
      } else {
        this.products = [];
        this.getDataService.getAllProducts().subscribe(result => {
          localStorage.setItem('products', JSON.stringify(result));
          this.products = result;
          console.log(this.products);
        });
      }
    });
    const user = JSON.parse(localStorage.getItem('user'));
    this.idUser = user.id;
    if (user.role === 'Admin') {
      this.showDelete = true;
      this.addProductCart = false;
    }
    this.getDataService.getProductsOfUSer(user.id).subscribe(res1 => {
      if (res1 !== null) {
        this.idOfProductsInChart = res1.prod_id.slice();
        this.id = res1.id;
        if (this.idOfProductsInChart.length > 0) {
          this.edit = true;
        }
      }
    });
    this.updateService.notifyForProduct.subscribe(res => {
      console.log('hyeri')
      this.updateDataFromSocket(res);
    });
    console.log(this.products)
  }

  openDetails(id) {
    if (this.showDelete) {
      this.getDataService.findProductById(id).subscribe(res => {
        this.dialog.open(ProductsDetailsComponent, {
          width: '50%',
          height: '80%',
          data: res
        });
      });
    }
  }

  deleteProduct(id: any) {
    this.dialog.open(MessageComponent, {
      width: '30%',
      height: '15%',
      data: 'Are you sure you want to delete?'
    }).afterClosed().subscribe(res => {
      if (res) {
        this.getDataService.deleteProduct(id).subscribe(result => {
        });
      }
    });
  }

  addToChart(id: any) {
    this.idOfProductsInChart.push(id);
    if (!this.edit) {
      const addObject = {
        prod_id: this.idOfProductsInChart,
        user_id: this.idUser
      };
      this.getDataService.addShopCart(addObject).subscribe(res2 => {

        this.edit = true;
      });
    } else {
      const addObject = {
        id: this.id,
        prod_id: this.idOfProductsInChart,
        user_id: this.idUser
      };
      this.getDataService.editShopCart(addObject).subscribe(res => {
        this.edit = true;
      });
    }
    this.edit = true;
  }

  updateDataFromSocket(newData) {
    this.products.push(newData)
    console.log(newData, "phphph");
  }
}
