import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-first-a',
  templateUrl: './first-a.component.html',
  styleUrls: ['./first-a.component.css']
})
export class FirstAComponent implements OnInit {
  userInput = '';
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
  }
  
  getValue(input: string) {
    this.dataService.userInput.next(input);
  }

}
