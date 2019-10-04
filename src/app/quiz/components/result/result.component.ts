import { Component, OnInit } from '@angular/core';
import { ResultService } from '../../services/result.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.sass']
})
export class ResultComponent implements OnInit {
  answers: Object = {};

  asd: Observable<any>;

  counterOfTrueAnswers = 0;

  lengthOfAnswers: number;

  constructor(
    private resultService: ResultService,
    public db: AngularFirestore
  ) { }

  ngOnInit() {
    this.db.collection('users').doc(localStorage.getItem('uid')).snapshotChanges().subscribe(data => {
      if(data.payload.data() === undefined) {
        this.db.collection('users').doc(localStorage.getItem('uid')).set({});
      }
    });
    
    this.db.collection('users').doc(localStorage.getItem('uid')).valueChanges().subscribe(data => {
      if(data) {
        this.answers = data;
        console.log(this.answers)
      }
    });

    this.resultService.result$.subscribe(data => {
      if(data) {
        this.getAnswers(data);
      }
    });
  }

  getAnswers(data: any) {
    let resultOfTest: any = new Object();
    this.lengthOfAnswers = data.length;
    const fieldForUpdate = sessionStorage.getItem('selectedTest');
    const nameTest = sessionStorage.getItem('selectedTestName');
    
    data.forEach(element => {
      if(element.isAnswer) {
        this.counterOfTrueAnswers++;
      }
    });
    
    resultOfTest[fieldForUpdate] = {
      name: `${nameTest}`,
      trueAnswers: this.counterOfTrueAnswers,
      allAnswers: this.lengthOfAnswers
    }


    setTimeout(() => {
      this.db.collection('users').doc(localStorage.getItem('uid')).update(resultOfTest);
    }, 0)
  }

}
