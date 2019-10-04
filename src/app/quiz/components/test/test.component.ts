import { Component, OnInit } from '@angular/core';
import { SelectedProfessionService } from '../../services/selected-profession.service';
import { Router } from '@angular/router';
import { ResultService } from '../../services/result.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {

  arrayOfQuestions: Array<any> = [];
  arrayOfMarked: Array<boolean> = [];
  arrayOfRequsted: Array<object> = [];
  isChecked = false;

  counter = 0;


  constructor(
    private selectedProfessionService: SelectedProfessionService,
    private resultService: ResultService,
    private router: Router
  ) { }

  ngOnInit() {
    this.selectedProfessionService.selectedProfession$.subscribe(data => {
      this.arrayOfQuestions = data.questions;
    });
  }

  toggleMark(event: any, question: object): void {
    if (event.target.checked) {
      this.arrayOfRequsted.push(question);
    }
  }

  nextQuestion(): void {
    if (this.counter < this.arrayOfQuestions.length) {
      this.counter++;
    }
  }

  finishTest(): void {
    this.resultService.result$.next(this.arrayOfRequsted);
    this.router.navigate(['/quiz/result']);
  }

}
