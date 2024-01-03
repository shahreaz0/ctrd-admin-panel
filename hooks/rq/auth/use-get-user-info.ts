import { useQuery } from "@tanstack/react-query";

import { request } from "@/lib/axios";

export type User = {
  id: string;
  fullName: string;
  email: string;
  fathersName: string;
  mothersName: string;
  presentAddress: string;
  permanentAddress: string;
  dateOfJoining: Date;
  dateOfBirth: Date;
  department: string;
  monthlySalary: number;
  roles: string[];
};

function fn() {
  return request.get<User>(`/api/Auth/Info`).then((res) => res.data);
}

export function useGetUserInfo() {
  return useQuery({
    queryKey: ["get-user-info"],
    queryFn: fn,
  });
}
