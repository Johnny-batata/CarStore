import useSWR from 'swr';

import axios from 'axios';

const token = localStorage.getItem('token');

const handleAxios = (bool?:boolean):any => {
  if (bool) {
    return {
      params: {
        all: 'sim',
      },
    };
  }
  return null;
};

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: token as string,
  },
});

export function useFetch<Data = any, Error = any>(url: string, bool?:boolean): any {
  const { data, error } = useSWR<Data, Error>(url, async (link:string) => {
    const response = await api.get(link, handleAxios(bool));
    return response.data.data;
  });

  return { data, error };
}
