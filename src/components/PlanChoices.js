import React from 'react';
import PlannedList from 'components/PlannedList';
import { options, useFetch } from 'hooks/useFetch';

//Displays the exercises for predefined plan.
let beginnerUrl = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
let list = 'https://exercisedb.p.rapidapi.com/exercises'
let id1 = 'https://exercisedb.p.rapidapi.com/exercises/exercise/0001'


function PlanChoices() {
    const bodyParts = useFetch(list, options);
    const listById = useFetch(id1, options);
    console.log(listById);
    return (
        <div id="plan">
            <PlannedList level="beginner" url={beginnerUrl} />
            <PlannedList level="intermediate" url={beginnerUrl}/>
            <PlannedList level="expert" url={beginnerUrl}/>
            <ul>
                {bodyParts?.map((item)=>{
                return <li key={item.id}>{item.id}. {item.name} BODY PART = {item.bodyPart}</li>
                })}
            </ul>
        </div>
    );
}

export default PlanChoices;