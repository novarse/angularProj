import { SearchComponent } from '../components/search/search.component';
import { UserService } from '../services/user/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';

@Injectable()
export class UnsearchedTermGuard implements CanDeactivate<SearchComponent> { 
  canDeactivate(component: SearchComponent, 
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
    console.log('UnsearchedTermGuard');
    console.log(route.params);
    console.log(state.url);
    return component.canDeactivate() || window.confirm('Are you sure?');
  }
}