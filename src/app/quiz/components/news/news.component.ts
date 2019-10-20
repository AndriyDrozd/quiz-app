import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {

  items: Observable<any>;

  credentialsUser = localStorage.getItem('uid');


  constructor(public db: AngularFirestore) { }

  ngOnInit() {
    this.items = this.db.collection('news').snapshotChanges().
    pipe(map(data => data.map(data1 => data1.payload.doc.data())))
  }

}
