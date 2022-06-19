import { useState, useEffect } from "react";

export const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
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