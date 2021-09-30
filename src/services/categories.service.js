import { useQuery } from "react-query";
import axios from "axios";

export const stateCategories = 'categories';
export function GetCategories() {
  return useQuery([stateCategories], async () => {
    const { data } = await axios('http://api.escuelajs.co/api/v1/categories');
    return data;
  });
}
