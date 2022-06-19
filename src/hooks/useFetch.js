import { useState, useEffect } from "react";

export const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '830b4b8052mshc4fa4449a8a9a2ep1a1956jsn99856bf7a0d8',
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