import { Injectable } from '@angular/core';
import { getLinkPreview } from 'link-preview-js';
@Injectable({
  providedIn: 'root'
})
export class LinkPreviewService {

  constructor() {

  }

  get(url: string): Promise<any> {
    return getLinkPreview(url);
  }

}
