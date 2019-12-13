import {Component} from '@angular/core';
import {AuthServiceService} from './services/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-app-front';

  constructor(private authService: AuthServiceService,
              private router: Router) {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']).then();
    } else {
      this.router.navigate(['categories']).then();
    }
  }

}
