import { useQuery, useMutation } from "react-query";
import axios from "axios";

export const stateProducts = 'products';
export function GetProducts() {
  return useQuery([stateProducts], async () => {
    const { data } = await axios('http://api.escuelajs.co/api/v1/products');
    return data;
  });
}

export const stateProduct = 'product';
export function GetProduct(id, options) {
  return useQuery([stateProduct, id], async () => {
    const { data } = await axios(`http://api.escuelajs.co/api/v1/products/${id}`);
    return data;
  }, options);
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

export function UpdateProduct(options) {
  return useMutation(
    async ({ id, body }) => {
      const { data } = await axios.put(`http://api.escuelajs.co/api/v1/products/${id}`, body);
      return data;
    },
    options
  );
}

export function DeleteProduct(options) {
  return useMutation(
    async (id) => {
      const { data } = await axios.delete(`http://api.escuelajs.co/api/v1/products/${id}`);
      return data;
    },
    options
  );
}
