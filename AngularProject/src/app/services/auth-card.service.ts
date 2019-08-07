import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthCardService implements CanActivate {

 // Inject Router so we can hand off the user to the Login Page 
 constructor(private router: Router) {}

 canActivate(
   route: import("@angular/router").ActivatedRouteSnapshot, 
   state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree>  {

      if ( localStorage.getItem('token') != null ){
        // Token from the LogIn is avaiable, so the user can pass to the route
        return true
      } 
       else  {
       
        alert("You are currently not logged in, please provide Login!")
        this.router.navigate( ["/login"] );
        return false

      }

 }
}
