import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.action';
import { tap, map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';
 
@Injectable()
export class AuthEffects {
 
  tryLogin$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.AuthTypes.TryLogin),
    tap(() => this.tryLogin())
  ), { dispatch: false });

//   auth$ = createEffect(() => this.actions$.pipe(
//     ofType(AuthActions.AuthTypes.Auth),
//     switchMap((data) => {
//         return this.authService.login(data)
//     }),
//   ).pipe(map(data => new AuthActions.Auth())), { dispatch: false});

  private tryLogin(): void {
    const getUserUid = localStorage.getItem('uid');
    getUserUid && this.router.navigate(['/quiz/news']);
  }
 
  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService
  ) {}
}