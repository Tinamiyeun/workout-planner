import React, {useState} from 'react';
import { options, useFetch } from './useFetch';
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import { ExerciseByBodyPart } from './ExerciseByBodyPart';

let urlBodyParts = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
let urlExercises = 'https://exercisedb.p.rapidapi.com/exercises';

export function BodyPart(){
    const [exercises, setExercises] = useState([]);

    const bodyParts = useFetch(urlBodyParts, options);
    const allExercises = useFetch(urlExercises, options)

    const showExercises = (body) => {
        const filterdExercises = allExercises.filter((exercise)=>exercise.bodyPart.includes(body));
        // console.log(filterdExercises);
        setExercises(filterdExercises);
    }

    return <>
    <div className="row">
    <Stack className="col-1">
        {bodyParts?.map((bodyPart)=>{
            return <Button key={bodyPart} variant="outline-primary" onClick={()=>showExercises(bodyPart)}>{bodyPart}</Button>
        })}
    </Stack>
    <ExerciseByBodyPart exercises={exercises} />
    </div>
    </>
}