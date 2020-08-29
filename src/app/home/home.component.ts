import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private fb: FormBuilder) { }

  editId: number = null;
  listOfData: Project[] = [];

  startEdit(id: number): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  deleteRow(id: string): void {
    // this.projects.delete(id);
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
    this.isOkLoading = true;
    this.isVisible = false;
    this.projects.create({
      name: this.validateForm.get('name').value
    }).then(d => {
      this.listOfData.push(d);
    }).finally(() => this.isOkLoading = true)


  }

  handleCancel(): void {
    this.isVisible = false;
    this.validateForm.reset();
  }

}
