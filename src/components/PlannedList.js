import React, { useState, useEffect } from 'react';
import { useFetchDb } from "hooks/useFetchDb";
import Button from 'react-bootstrap/Button';
import { options, useFetch } from 'hooks/useFetch';

 function PlannedList (props) {
    let data = props.data;
    const [exercises, setExercises] = useState(data);

    let urlList = [];
    const exercisesUrls = () => {exercises.map((item) => {
        item.exercise.map((exercise) => {
            return (urlList.push(exercise.url))
        })
    })}
    //console.log(exercisesUrls);

    //let url = props.url;
    
    let exerciseName = [];
    const fetchNames = async () => {
        for (const url of urlList) {
            const res = await fetch(url);
            exerciseName.push(await res.json());
        }
        return exerciseName;
    }

    const saveExercise = () => {
        sessionStorage.setItem('exerciseList', exerciseName);
    }

    useEffect (() => {
        exercisesUrls();
        fetchNames();
        console.log(props.data);
        //console.log(exercises)
        //console.log(urlList);
        console.log(exerciseName);
    }, [])


    //const bodyParts = useFetch(url, options);
    return ( //useFetch and have props for url.
        <div>
            <h2>{props.level}</h2>
            <ul>
                {exerciseName?.map((name)=>{
                return <li key={name}>{name}</li>
                })}
            </ul>
            <button onClick={saveExercise} >Select this plan</button>
        </div>
    );
}

export default PlannedList;
/*onClick={setExercises(props.data)} 
<ul>
                {exercisesUrls?.map((url)=>{
                return <li key={url}>{url}</li>
                })}
            </ul>
*/
