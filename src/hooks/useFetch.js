import { useState, useEffect } from "react";

export const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '082a5f6ba3mshd277027b79d445bp15ed55jsnb7c2a88adc19',
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