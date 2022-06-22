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
        setExercises(filterdExercises);
    }

    return (
        <div className="row">
            <div className="col-2 navList">
                <Stack>
                    {bodyParts?.map((bodyPart) => {
                        return <Button type="submit" className="navBtn" key={bodyPart} variant="outline-secondary"
                                       onClick={() => showExercises(bodyPart)}>{bodyPart}</Button>
                    })}
                </Stack>
            </div>
            <div className="col-10">
                <ExerciseByBodyPart exercises={exercises}/>
            </div>
        </div>
    )
}