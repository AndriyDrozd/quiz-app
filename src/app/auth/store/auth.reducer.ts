import { Action } from '@ngrx/store';
import * as AuthActions from './auth.action';

const initialState = {
    loading: false,
    isLogined: false
}

export function reducer(state = initialState, action: AuthActions.Actions ) {
    switch(action.type) {
        case AuthActions.AuthTypes.Auth:
            return {
                loading: false,
                isLogined: true
            };

        case AuthActions.AuthTypes.Loginned:
            return {
                ...initialState,
                isLogined: !!localStorage.getItem('uid') || false
            };

        default:
            return state;
    }
}