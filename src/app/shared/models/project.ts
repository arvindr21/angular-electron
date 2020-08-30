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
}
