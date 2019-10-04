import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { SelectedProfessionService } from '../../services/selected-profession.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kind-of-profession',
  templateUrl: './kind-of-profession.component.html',
  styleUrls: ['./kind-of-profession.component.sass']
})
export class KindOfProfessionComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  kindsOfProfession: Array<any> = [];

  constructor(
    private db: AngularFirestore,
    private selectedProfessionService: SelectedProfessionService,
    private router: Router
    ) { }

  ngOnInit() {
    this.subscription = this.db.collection('answers').snapshotChanges()
    .pipe(map(data => data.map(data1 => data1.payload.doc.data())))
    .subscribe(test => {
      this.kindsOfProfession = test;
    });
  }

  selectTest(selectProfession: any): void {
    sessionStorage.setItem('selectedTest', `${selectProfession.id}`);
    sessionStorage.setItem('selectedTestName', `${selectProfession.name}`);
    this.selectedProfessionService.selectedProfession$.next(selectProfession);
    this.router.navigate(['quiz/test']);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
