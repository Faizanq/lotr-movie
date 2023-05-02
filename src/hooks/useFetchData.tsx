import { useEffect, useState } from 'react';
import { Data } from "../types"


interface FetchDataResult {
  data: Data | null;
  loading: boolean;
  error: string | null;
}


export default function useFetchData(selection: string | null): FetchDataResult {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const apiUrl = 'https://the-one-api.dev/v2';
  const APITOKEN = import.meta.env.VITE_APP_TOKEN;
  const options = {
    headers: {
      Authorization: `Bearer ${APITOKEN}`,
    },
  };

  useEffect(() => {
    if (!selection) {
      return;
    }

    setLoading(true);
    setError(null);

    async function fetchData() {
      try {
        const url = `${apiUrl}/${selection}`;
        const res = await fetch(url, options);

        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const jsonData: Data = await res.json();
        setData(jsonData);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [selection]);

  return { data, error, loading };
}
