export interface User {
  id: number;
  name: string;
  company: string;
  companyId: number;
  position: string;
  contact_email: string;
}

export type UserContextType = {
  Users: Array<User>;
  SetUsers: (value: Array<User>) => void;
};
