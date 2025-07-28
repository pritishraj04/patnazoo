import { useEffect, useState } from "react";
import { fetchData } from "@/services/getApi";


export const useApiData = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData<T>(endpoint);
        // console.log(`Data from ${endpoint}:`, result);
        setData(result ?? null);
      } catch (err) {
        setError(`Failed to fetch ${endpoint} data`);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [endpoint]);

  return { data, loading, error };
};
