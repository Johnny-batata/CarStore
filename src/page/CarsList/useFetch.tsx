import useSWR from 'swr';

import axios from 'axios';

const token = localStorage.getItem('token');

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: token as string,
  },

});

export function useFetch<Data = any, Error = any>(url: string): any {
  const { data, error } = useSWR<Data, Error>(url, async (link:string) => {
    const response = await api.get(link);
    // console.log(response, data, 'resposta do useFetch');
    return response.data.data;
  });

  console.log(data, 'qualé');

  return { data, error };
}
