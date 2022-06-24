import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      setIsPending(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (e) {
        setError(e as Error);
      } finally {
        setIsPending(false);
      }
    })();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
