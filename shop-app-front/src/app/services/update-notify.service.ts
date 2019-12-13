import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateNotifyService {
  notyfyForCategory: Subject<any> = new Subject<any>();
  notifyForProduct: Subject<any> = new Subject<any>();

  constructor() {
  }

}
