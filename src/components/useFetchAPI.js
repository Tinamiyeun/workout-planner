import { useState, useEffect } from "react";

export const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'af0e2c7d05msh339451ea440c367p1d20bajsn92b71511b7cb',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export function useFetchAPI(url, options) {

  const [data, setData] = useState();

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
  return data;
};