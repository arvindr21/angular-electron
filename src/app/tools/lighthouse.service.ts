import { Injectable } from '@angular/core';
// const lighthouse = require('lighthouse');
// const chromeLauncher = require('chrome-launcher');

@Injectable({
  providedIn: 'root'
})
export class LighthouseService {

  constructor() { }

  // launchChrome(url: string): any {
  //   chromeLauncher.launch().then(chrome => {
  //     const opts = {
  //       port: chrome.port
  //     };
  //     return lighthouse(url, opts).then(results => {
  //       return chrome.kill().then(() => results.report);
  //     });
  //   });
  // }

  launchChrome(url: string): any {
    return { url};
  }
}
