import { Address, Description, User } from './user.model';

export interface Employer extends User {
  employerId: string;
  postedJobs: string[];
  company: Description;
  address: Address;
  phone: string;
}
