import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-second-a',
  templateUrl: './second-a.component.html',
  styleUrls: ['./second-a.component.css']
})
export class SecondAComponent implements OnInit {
  alphaValues: string = "";
  constructor(private dataService : DataService) { }

  ngOnInit(): void {

    this.getInputLisner()
  }

  getInputLisner() {
    this.dataService.getUserInput.subscribe(res => {
      this.alphaValues = res?.replace(/[^a-zA-Z]/g, '');
    })
  }

}
