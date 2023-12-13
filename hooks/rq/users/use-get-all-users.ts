import { useQuery } from "@tanstack/react-query";

import type { User } from "@/types/user";
import { request } from "@/lib/axios";

function fn() {
  return request.get<User[]>("/api/Auth/GetAllUser").then((res) => res.data);
}

export default function useGetAllUsers() {
  return useQuery({
    queryKey: ["get-all-users"],
    queryFn: fn,
  });
}
