import {Component, Input, OnInit} from '@angular/core';
import {AuthServiceService} from '../../services/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() data = '';
  showBasket = true ;
  constructor(private authService: AuthServiceService, private router: Router) {
  }

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('user')), 'alba@123');
    if (JSON.parse(localStorage.getItem('user')).role === 'Admin')  {
      this.showBasket = false ;
    }
  }

  logout() {
    this.authService.deleteToken();
    this.router.navigate(['login']).then();
    this.data = 'categories';
  }

  goToCategories() {
    this.router.navigate(['categories']).then(res => {
    });

  }

  goToProducts() {
    this.router.navigate(['/products'], {queryParams: null}).then(res => {
    });

  }

  goToBasket() {
    this.router.navigate(['basket']).then(res => {
    });

  }
}
