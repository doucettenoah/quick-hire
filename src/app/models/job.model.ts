import { Code, Description } from './user.model';

export interface Job {
  jobId: string;
  jobTitle: Description;
  jobDescription: Description;
  salary: number;
  employer: Code;
  applicants: string[];
  datePosted: string;
  active: boolean;
  thumbnail: string;
}
