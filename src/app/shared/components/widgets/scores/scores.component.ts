import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  @Input() tab: any;

  constructor() { }

  ngOnInit(): void {
  }

}
