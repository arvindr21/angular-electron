import { Injectable } from '@angular/core';
const { app } = require('electron');
const Datastore = require('nedb-promises');

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {
  private dbFactory;
  dbReports;
  constructor() {
    // this.dbFactory = (fileName: string) => Datastore.create({
    //   filename: `${process.env.NODE_ENV === 'dev' ? '.' : app.getAppPath()}/data/${fileName}`,
    //   timestampData: true,
    //   autoload: true
    // });

    this.load();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  private load() {
    // this.dbReports = this.dbFactory('reports.db')
  }
}
