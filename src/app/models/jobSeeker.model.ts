import { Address, User } from './user.model';

export interface JobSeeker extends User {
  firstName: string;
  lastName: string;
  fullName: string;
  address: Address;
  phone: string;
  appliedJobs: string[];
}
