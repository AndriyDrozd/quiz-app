import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.sass']
})
export class CreateNewsComponent implements OnInit {

  newsForm: FormGroup;

  constructor(
    private router: Router,
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    this.newsForm = new FormGroup({
      'header': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'img': new FormControl(null, [])
    });
  }

  onSubmit(): void {
    this.db.collection('news').add(this.newsForm.value);
    this.router.navigate(['/quiz/news']);
  }

}
