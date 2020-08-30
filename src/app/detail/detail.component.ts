import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project, URLConfig } from '../shared/models/project';

import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ProjectService } from "../shared/services/project.service";
import { URL_REGEX } from "../utilities";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id: string;
  project: Project;
  i = 0;
  editId: number | null = null;
  listOfData: URLConfig[] = [];
  isVisible = false;
  isOkLoading = false;
  validateForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private fb: FormBuilder,
    private messageService: NzMessageService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.load();
    this.validateForm = this.fb.group({
      // eslint-disable-next-line @typescript-eslint/unbound-method
      name: [null, [Validators.required]],
      // eslint-disable-next-line @typescript-eslint/unbound-method
      url: [null, [Validators.required, Validators.pattern(URL_REGEX)]]
    });
  }

  startEdit(id: number): void {
    this.editId = id;
  }

  stopEdit(_d: URLConfig): void {
    const config = this.listOfData.filter(data => data.id !== this.editId);
    this.project.urls = config.concat(_d);
    this.projectService.update(this.project).then(() => {
      this.messageService.success('Update successful');
    });
    this.editId = null;
  }

  deleteRow(id: number): void {
    const config = this.listOfData.filter(d => d.id !== id);
    this.project.urls = config;
    this.projectService.update(this.project).then(() => {
      this.messageService.success('Delete successful');
      this.load();
    });
  }

  createNew(): void {
    this.isVisible = true;
  }

  load(): void {
    this.projectService.getOne(this.id).then((p: Project) => {
      this.project = p;
      p.urls = p.urls || [];
      this.listOfData = p.urls;
    });
  }

  handleOk(): void {
    const name = this.validateForm.get('name').value;
    const url = this.validateForm.get('url').value;

    console.log(name, url)

    if (!name || !url) return;
    this.isOkLoading = true;

    this.project.urls.push({
      id: +new Date(),
      name,
      url
    });

    this.projectService.update(this.project).then(() => {
      this.load();
      this.messageService.success('Created successful');
      this.isOkLoading = false;
      this.validateForm.reset();
      this.isVisible = false;
    });

  }

  handleCancel(): void {
    this.isVisible = false;
    this.validateForm.reset();
  }

  audit(id: number): void {

  }

}
