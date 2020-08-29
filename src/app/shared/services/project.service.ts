import { DataStoreService } from "../store/datastore.service";
import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private dataStoreService: DataStoreService) { }

  create(project: Project): Promise<Project> {
    return this.dataStoreService.insert(project);
  }

  get(): Promise<Array<Project>> {
    return this.dataStoreService.findAll();
  }




}
