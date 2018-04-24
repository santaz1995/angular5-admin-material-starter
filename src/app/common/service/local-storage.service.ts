import { Injectable } from '@angular/core';
import { WindowRef } from 'app/common/service/window-ref.service';

@Injectable()
export class LocalStorageService {

  /**
   * @param {string} key
   * @returns {any}
   */
  public static get(key: string): any {
    return JSON.parse(WindowRef.window.localStorage.getItem(key));
  }

  /**
   * @param {string} key
   * @param value
   */
  public static set(key: string, value: any) {
    WindowRef.window.localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * @param {string} key
   */
  public static remove(key: string) {
    WindowRef.window.localStorage.removeItem(key);
  }
}
