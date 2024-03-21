import { Injectable } from '@angular/core';

// Alertify
declare let alertify: any;

@Injectable({
  providedIn: 'root',
})
export class AlertifyMessageService {
  constructor() {}

  // Success
  alertSuccess(message: string) {
    alertify.success(message);
  }

  // Warning
  alertWarning(message: string) {
    alertify.warning(message);
  }
  // Message
  alertMessage(message: string) {
    alertify.message(message);
  }
  // Error
  alertError(message: string) {
    alertify.error(message);
  }
} //end AlertifyMessageService
