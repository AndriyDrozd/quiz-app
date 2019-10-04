import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedProfessionService {
  selectedProfession$ = new BehaviorSubject(null);

  constructor() { }
}
