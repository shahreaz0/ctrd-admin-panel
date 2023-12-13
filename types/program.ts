export type Program = {
  id: number;
  name: string;
  region: string;
  icon: string;
  description: string;
  managers: Employee[];
  workers: Employee[];
};

export type Employee = {
  id: string;
  userName: string;
  normalizedUserName: string;
  email: string;
  normalizedEmail: string;
  emailConfirmed: boolean;
  passwordHash: string;
  securityStamp: string;
  concurrencyStamp: string;
  phoneNumber: string;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  lockoutEnd: Date;
  lockoutEnabled: boolean;
  accessFailedCount: number;
  fullName: string;
  fathersName: string;
  mothersName: string;
  presentAddress: string;
  permanentAddress: string;
  dateOfJoining: Date;
  dateOfBirth: Date;
  department: string;
  activated: boolean;
  monthlySalary: number;
};
