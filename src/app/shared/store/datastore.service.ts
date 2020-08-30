/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@angular/core';
const Datastore = require('nedb');
const database = "projects.db";

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  public db: any;
  private collection = [];
  constructor() {
    this.db = new Datastore({
      filename: database,
      autoload: true,
      timestamps: true
    });

  }

  //---------------------------------------------------------------
  //CRUD NeDB
  //---------------------------------------------------------------

  insert(item: any): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.db.insert(item, ((err: any, newItem: any) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(newItem);
        }
      }))
    });
  }

  update(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.db.update({ _id: data._id }, { $set: data }, ((err: any, item: any) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(item);
        }
      }));
    })
  }

  findAll(): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      return this.db.find({}, ((err: any, items: any) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(items);
        }
      }));
    })
  }

  find(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.db.findOne({ _id: id }, ((err: any, item: any) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(item);
        }
      }));
    })
  }

  remove(id: any): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.db.remove({ _id: id }, {}, ((err: any, numRemoved: any) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(numRemoved);
        }
      }));
    })
  }



}
