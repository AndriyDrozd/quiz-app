import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  result$ = new BehaviorSubject(null);

  constructor() { }
}
