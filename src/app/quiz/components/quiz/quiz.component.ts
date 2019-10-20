import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.sass']
})
export class QuizComponent implements OnInit {

  showText = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  openPdf(url: string): void {
    window.open(url, '_blank');
  }

  toogleText(): void {
    this.showText = !this.showText;
  }

  logout(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

}
