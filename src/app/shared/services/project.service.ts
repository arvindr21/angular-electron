import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Array<Project> = [];
  constructor() { }

  set(project: Project): void {
    this.projects.push(project);
  }

  getAll(): Array<Project> {
    return this.projects;
  }
}
