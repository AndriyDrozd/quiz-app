import { Action } from '@ngrx/store';


export enum AuthTypes {
    TryLogin = '[Auth] Try login',
    Auth = '[Auth] Auth',
    Loginned = '[Auth] Logined'
}

export class TryLogin implements Action {
    readonly type = AuthTypes.TryLogin;
}

export class Auth implements Action {
    readonly type = AuthTypes.Auth;
    constructor(public authType: string, public payload: any) {}
}

export class IsLogined implements Action {
    readonly type = AuthTypes.Loginned;
}

export type Actions = TryLogin | Auth | IsLogined;