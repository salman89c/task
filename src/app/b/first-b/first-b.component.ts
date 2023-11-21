import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-first-b',
  templateUrl: './first-b.component.html',
  styleUrls: ['./first-b.component.css']
})
export class FirstBComponent implements OnInit {
  numericValues : string = "";
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.getInputLisner();
  }

  getInputLisner() {
    this.dataService.getUserInput.subscribe(res => {
      this.numericValues = res?.replace(/[^0-9]/g, '');
    })
  }

}
