import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { LocalStorageService } from 'app/common/service/local-storage.service';

@Injectable()
export class AuthenticationService {

  private jwt: string;

  public static setToken(token: string) {
    LocalStorageService.set('jwt', token);
  }

  public static removeToken() {
    LocalStorageService.remove('jwt');
  }

  public static getToken(): string {
    return LocalStorageService.get('jwt');
  }

  public static isAuthenticated(): any {
    return tokenNotExpired(null, this.getToken());
  }

  public static hasToken(): boolean {
    return !! LocalStorageService.get('jwt');
  }
}
