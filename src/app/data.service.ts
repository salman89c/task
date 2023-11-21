import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public userInput = new BehaviorSubject("");
  getUserInput = this.userInput.asObservable();
}
