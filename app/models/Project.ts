export interface Project {
  id:number;
  path:string;
  name:string;
  languages: string[];
  frameworks: string[];
  description: string;
  urlWebsite?: string;
  urlImage?: string;
  urlGithub?: string;
  status: string;
}