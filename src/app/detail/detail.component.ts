import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ProjectService } from "../shared/services/project.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id: string;
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.projectService.getOne(this.id).then((p) => {
      console.log(p);
    });
  }

}
