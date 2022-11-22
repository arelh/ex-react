import { useState, useEffect } from "react";
import axios from "axios";

const UseFetch = (url) => {
  const [state, setState] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(url);
        setState(data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return [state, isLoading, error];
};

export default UseFetch;
