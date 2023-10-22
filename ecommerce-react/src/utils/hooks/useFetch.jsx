import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (endpoint, initial) => {
  const [data, setData] = useState(initial);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const getdata = axios.get(endpoint);
      getdata
        .then((res) => setData(res.data))
        .catch( (error) => setErrorMessage(error) )
        .finally(() => setIsLoading(false));
    }, 2000);
  }, [endpoint]);

  return { data, isLoading, errorMessage };
};
