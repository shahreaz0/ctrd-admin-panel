export type User = {
  id: number;
  firstName: string;
  lastName: string;
  fathersName: string;
  mothersName: string;
  phoneNumber: string;
  NID: string;
  avatar: string;
  presentAddress: string;
  permanentAddress: string;
  dateOfJoining: Date;
  monthlySalary: number;
  department: string;
  projectManager: ProjectManager;
  dateOfBirth: Date;
  status: string;
  enrolled: Enrolled[];
};

export type Enrolled = {
  programName: string;
  programUUID: string;
  programStatus: string;
};

export type ProjectManager = {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;
};
