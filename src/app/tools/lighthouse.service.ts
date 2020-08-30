import { Injectable } from '@angular/core';
const puppeteer = require('puppeteer');
const lighthouse = require('lighthouse');
const { URL } = require('url');

@Injectable({
  providedIn: 'root'
})
export class LighthouseService {

  constructor() { }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async getReport(url: string) {
    // const url = 'https://www.chromestatus.com/features';

    // Use Puppeteer to launch headful Chrome and don't use its default 800x600 viewport.
    const browser = await puppeteer.launch({
      headless: true,
      defaultViewport: {
        width: 360,
        height: 640
      }
    });

    const report = await lighthouse(url, {
      port: (new URL(browser.wsEndpoint())).port,
      output: 'json',
      logLevel: 'info',
    });

    console.log(`Lighthouse scores: ${Object.values(report.lhr.categories).join(', ')}`);

    await browser.close();

    return report;
  }
}
