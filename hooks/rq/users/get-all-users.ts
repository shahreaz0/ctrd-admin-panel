import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import type { User } from "@/types/user";

let url =
  process.env.NODE_ENV === "production"
    ? "https://ctrd-admin.vercel.app/api/users"
    : "http://localhost:3000/api/users";

function userFetcher() {
  return axios.get<{ data: User[] }>(url).then((res) => res.data.data);
}

export default function useGetAllUsers() {
  return useQuery({
    queryKey: ["get-all-users"],
    queryFn: userFetcher,
  });
}
