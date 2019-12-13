import {Component, OnInit} from '@angular/core';
import {GetDataService} from '../../services/get-data.service';
import {MatDialog} from "@angular/material/dialog";
import {ImageExpandComponent} from "../image-expand/image-expand.component";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  path = 'basket';
  products: any[];
  productOfUSer = [];
  idUser = '';
  idOfBasket = '';

  constructor(private getDataService: GetDataService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.products = [];
    this.getAllProductsofUser();

  }


  getAllProductsofUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.idUser = user.id;
    this.getDataService.getProductsOfUSer(user.id).subscribe(res => {
      this.productOfUSer = res.prod_id;
      this.idOfBasket = res.id;
      const prod = JSON.parse(localStorage.getItem('products'));
      prod.map((el) => {
        this.productOfUSer.map(element => {
          if (element === el.id) {
            this.products.push(el);
          }
        });
      });
    });
  }


  removeFromBasket(id: string) {
    this.productOfUSer.splice(this.productOfUSer.indexOf(id), 1);
    console.log(this.productOfUSer);
    const editObject = {
      id: this.idOfBasket,
      prod_id: this.productOfUSer,
      user_id: this.idUser
    };
    this.getDataService.editShopCart(editObject).subscribe(res => {

    });
  }

  openImage(imageSrc: string) {
    this.dialog.open(ImageExpandComponent, {
      width: '50%',
      height: '68%',
      data: {
        image: imageSrc
      }
    });
  }
}
