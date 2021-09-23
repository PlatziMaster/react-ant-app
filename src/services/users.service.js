import { useQuery } from "react-query";
import axios from "axios";

export const stateUsers = 'users';
export function GetUsers() {
  return useQuery([stateUsers], async () => {
    const { data } = await axios("https://randomuser.me/api/?results=100");
    return data.results;
  });
}


