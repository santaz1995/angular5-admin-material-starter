import { Injectable } from '@angular/core';

@Injectable()
export class WindowRef {

  /**
   * @returns {Window}
   */
  static get window(): Window {
    return window;
  }

}
