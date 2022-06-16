import { useState, useEffect } from "react";

export const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '343a4b19camsh12ae41ffa58b431p141145jsn4b98d0e7d4a6',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export function useFetch(url, options) {

  const [data, setData] = useState();

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
  return data;
};