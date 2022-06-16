import React, {useState} from 'react';
import { options, useFetchAPI } from './useFetchAPI';
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import { ExerciseByBodyPart } from './ExerciseByBodyPart';

let urlBodyParts = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
let urlExercises = 'https://exercisedb.p.rapidapi.com/exercises';

export function BodyPart(){
    const [exercises, setExercises] = useState([]);

    const bodyParts = useFetchAPI(urlBodyParts, options);
    const allExercises = useFetchAPI(urlExercises, options)

    const showExercises = (body) => {
        const filterdExercises = allExercises.filter((exercise)=>exercise.bodyPart.includes(body));
        // console.log(filterdExercises);
        setExercises(filterdExercises);
    }

    return <>
    <div className="row">
    <div className="col-2">
    <Stack>
        {bodyParts?.map((bodyPart)=>{
            return <Button key={bodyPart} variant="outline-primary" onClick={()=>showExercises(bodyPart)}>{bodyPart}</Button>
        })}
    </Stack>
    </div>
    <ExerciseByBodyPart exercises={exercises} />
    </div>
    </>
}