import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserLoginService } from '../service/user-login.service';

export const authGuard: CanActivateFn = () => {
  const serve = inject(UserLoginService);
  const route = inject(Router)
  if(serve.issignupcart){
    return true
  }
  else{
    alert('Not Authorized please signUp⚠️');
    route.navigate(['signup'])
    return false 
  }
};
