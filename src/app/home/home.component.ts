import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NzMessageService } from 'ng-zorro-antd/message';
import { Project } from '../shared/models/project';
import { ProjectService } from "../shared/services/project.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  isVisible = false;
  isOkLoading = false;
  validateForm!: FormGroup;
  constructor(
    private projects: ProjectService,
    private fb: FormBuilder,
    private messageService: NzMessageService) { }

  editId: string = null;
  listOfData: Project[] = [];

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    const project = this.findInProjects(this.editId);
    this.projects.update(project).then(() => {
      this.messageService.success('Project updated successfully');
    });
    this.editId = null;
  }

  findInProjects(id: string): Project{
    return this.listOfData.filter(p => p._id === id)[0];
  }

  deleteRow(id: string): void {
    this.projects.remove(id).then(() => {
      this.messageService.success(`Project deleted successfully`);
      // this.listOfData.splice(index, 1);
      this.load();
    });
  }

  ngOnInit(): void {
    this.load();
    this.validateForm = this.fb.group({
      // eslint-disable-next-line @typescript-eslint/unbound-method
      name: [null, [Validators.required]]
    });
  }

  createNew(): void {
    this.isVisible = true;
  }

  load(): void {
    this.projects.get().then((d) => {
      this.listOfData = [].concat(...d);
    })
  }

  handleOk(): void {
    const name = this.validateForm.get('name').value;
    if(!name) return;
    this.isOkLoading = true;
    this.projects.create({
      name: name
    }).then(() => {
      this.load();
      this.messageService.success('New Project created successfully');
      this.isOkLoading = false;
      this.validateForm.reset();
      this.isVisible = false;
    })
  }

  handleCancel(): void {
    this.isVisible = false;
    this.validateForm.reset();
  }

}
