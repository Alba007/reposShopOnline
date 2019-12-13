import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterPositionsService {

  constructor(private toastrService: ToastrService) {
  }

  // error message method
  error(title?: string, message?, position?) {
    this.toastrService.error(message, title, {positionClass: position});
  }

  warning(title?: string, message?, position?) {
    this.toastrService.warning(message, title, {positionClass: position});
  }

  info(title?: string, message?, position?) {
    this.toastrService.info(message, title, {positionClass: position});
  }

  success(title?: string, message?, position?) {
    this.toastrService.success(message, title, {positionClass: position});
  }
}
