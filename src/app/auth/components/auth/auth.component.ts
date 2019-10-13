import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {


  public status;
  public emailInput: string;
  public hideTextLogin = true;
  public loaded = false;
  public isError;
  public spinner = false;

  loginForm: FormGroup;


  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
    this.tryLogin();
  }

  ngOnInit() {

    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(30)])
    });

  }



  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  isTrueCharacter(event: any) {
    const pattern = '/|,?_&^%$#!*()+=-';
    if (pattern.includes(event.data)) {
      event.target.value = event.target.value.substr(0, event.target.value.length - 1);
    }
  }

  private tryLogin(): void {
    const getUserUid = localStorage.getItem('uid');
    getUserUid !== null ? this.router.navigate(['/quiz/dashboard']) : null;
  }

  private showSpinner(): void {
    this.hideTextLogin = !this.hideTextLogin;
    this.spinner = !this.spinner;
  }

  private setUidUserInLocalstorage(uid: string): void {
    localStorage.setItem('uid', uid);
  }

  onSubmit() {
    this.showSpinner();
    this.authService.login(this.loginForm.value).then(data => {
      this.setUidUserInLocalstorage(data.user.uid);
      this.router.navigate(['/quiz/dashboard']);
    }, err => {
      setTimeout(() => {
        this.showSpinner();
      }, 500);
    });
  }


}
