import { useState, useEffect } from "react";

export const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '2b4bb7ab1cmsh5c92c6aa9455437p122a39jsn92b69c8faa74',
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