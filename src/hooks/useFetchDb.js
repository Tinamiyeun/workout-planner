import { useState, useEffect } from "react";

export function useFetchDb(url, method) {
    const [data, setData] = useState([]);

    useEffect(() => {
        try {
            fetch(url, {method: method})
            .then((res) => res.json())
            .then((data) => setData(data));
        } catch (err) {
            alert(err.message)
        }
    }, [url, method, data]);

    return [data];
};