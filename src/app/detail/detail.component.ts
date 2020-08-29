import { Component, OnInit } from '@angular/core';

import { LighthouseService } from "../tools/lighthouse.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private lighthouseService: LighthouseService) { }

  ngOnInit(): void {
    this.lighthouseService.launchChrome('https://google.com').then((d) => {
      console.log(d);
    })
  }

}
