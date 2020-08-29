import { AppConfig } from '../environments/environment';
import { Component } from '@angular/core';
import { DatastoreService } from "./core/services/datastore/datastore.service";
import { ElectronService } from './core/services';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private electronService: ElectronService,
    private datastoreService: DatastoreService,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);

    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Run in electron');
      console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
      console.log('NodeJS childProcess', this.electronService.childProcess);
    } else {
      console.log('Run in browser');
    }
  }
}
