import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    })();
  }, [url]);
  return { data };
};

export default useFetch;
