import { LighthouseResultObject } from "./lhr";

export interface Project {
  _id?: string;
  name: string;
  urls?: Array<URLConfig>;
}


export interface URLConfig {
  id: number;
  name: string;
  url: string;
  isProcessing?: boolean;
  preview?: LinkPreview;
  lhr?: LighthouseResultObject;
}

export interface LinkPreview {
  url:         string;
  title:       string;
  description: string;
  mediaType:   string;
  contentType: string;
  images:      string[];
  videos:      string[];
  favicons:    string[];
  siteName?:   string;
}


