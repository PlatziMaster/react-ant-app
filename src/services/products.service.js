import { useQuery, useMutation } from "react-query";
import axios from "axios";

export const stateProducts = 'products';
export function GetProducts() {
  return useQuery([stateProducts], async () => {
    const { data } = await axios('http://api.escuelajs.co/api/v1/products');
    return data;
  });
}

export function CreateProduct(options) {
  return useMutation(
    async (body) => {
      const { data } = await axios.post('http://api.escuelajs.co/api/v1/products', body);
      return data;
    },
    options
  );
}
