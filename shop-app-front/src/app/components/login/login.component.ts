import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthServiceService} from '../../services/auth-service.service';
import {tap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {SocketService} from '../../services/socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthServiceService,
              private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    this.authService.authenticate(this.loginForm.getRawValue()).subscribe(res => {
      console.log(res);
      localStorage.setItem('user', JSON.stringify(res.user));
      this.authService.saveToken(res.token);
      this.router.navigate(['categories']).then();
    });
  }
}
