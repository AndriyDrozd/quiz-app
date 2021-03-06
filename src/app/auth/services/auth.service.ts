import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  afAuth:  AngularFireAuth) { }

  login(credentials: { email: string, password: string }) {
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  signUp(credentials: { email: string, password: string }) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

}
