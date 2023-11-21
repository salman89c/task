import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-second-b',
  templateUrl: './second-b.component.html',
  styleUrls: ['./second-b.component.css']
})
export class SecondBComponent implements OnInit {

  specialCharacters: string = '';
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.getInputLisner();
  }

  getInputLisner() {
    this.dataService.getUserInput.subscribe(res => {
      this.specialCharacters = res?.replace(/[a-zA-Z0-9]/g, '');
    })
  }

}
