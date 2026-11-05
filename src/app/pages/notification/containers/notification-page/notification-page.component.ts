import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { SuccessToastComponent } from '../success-toast/success-toast.component';
import { ErrorToastrComponent } from '../error-toastr/error-toastr.component';
import { InfoToastrComponent } from '../info-toastr/info-toastr.component';

enum ToastPositionTypes {
  bottomCenter = 'toast-bottom-center',
  bottomRight = 'toast-bottom-right',
  bottomLeft = 'toast-bottom-left',
  topCenter = 'toast-top-center',
  topRight = 'toast-top-right',
  topLeft = 'toast-top-left'
}

@Component({
  standalone: false,
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.scss']
})
export class NotificationPageComponent {
  public toastrPositionTypes: typeof ToastPositionTypes = ToastPositionTypes;
  public toastrPosition: string = this.toastrPositionTypes.topRight;
  public timeOut = 3000;
  public toastrLink: string = 'https://github.com/scttcper/ngx-toastr';

  constructor(private toastrService: ToastrService) {
  }

  public setToastrPosition(position: string): void {
    this.toastrPosition = position;
  }

  public showSuccess(): void {
    this.toastrService.show(
      null,
      null,
      {
        positionClass: this.toastrPosition,
        toastComponent: SuccessToastComponent,
        timeOut: this.timeOut,
        tapToDismiss: false
      }
    );
  }

  public showErrorToastr(): void {
    this.toastrService.show(
      null,
      null,
      {
        positionClass: this.toastrPosition,
        toastComponent: ErrorToastrComponent,
        timeOut: this.timeOut,
        tapToDismiss: false
      }
    );
  }

  public showInfoToastr(): void {
    this.toastrService.show(
      null,
      null,
      {
        positionClass: this.toastrPosition,
        toastComponent: InfoToastrComponent,
        timeOut: this.timeOut,
        tapToDismiss: false
      }
    );
  }
}
