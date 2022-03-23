import {Injectable} from "@angular/core";
import {CanActivate, CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {UserService} from "./service/user.service";

@Injectable()
export class AuthGuard
  implements CanActivate, CanActivateChild{
  constructor(private user: UserService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.user.isLogIn
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(next, state)
  }
}
