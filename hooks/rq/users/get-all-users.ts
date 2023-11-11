import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import type { User } from "@/types/user";

function userFetcher() {
  return axios
    .get<{ data: User[] }>("http://localhost:3000/users/api")
    .then((res) => res.data.data);
}

export default function useGetAllUsers() {
  return useQuery({
    queryKey: ["get-all-users"],
    queryFn: userFetcher,
  });
}
