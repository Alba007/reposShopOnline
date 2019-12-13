import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private  http: HttpClient) {
  }

  getToken() {
    return sessionStorage.getItem('Bearer');
  }

  saveToken(token) {
    sessionStorage.setItem('Bearer', token);
  }

  deleteToken() {
    sessionStorage.removeItem('Bearer');
  }

  isAuthenticated() {
    if (sessionStorage.getItem('Bearer')) {
      return true;
    }
  }

  authenticate(dataAuth): Observable<any> {
    console.log(dataAuth);
    return this.http.post(`http://localhost:8080/api/auth/login`, dataAuth);
  }
}
