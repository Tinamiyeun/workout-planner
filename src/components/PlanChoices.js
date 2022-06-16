import React from 'react';
import PlannedList from 'components/PlannedList';
import { options, useFetch } from 'hooks/useFetch';

//Displays the exercises for predefined plan.
let beginnerUrl = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';

function PlanChoices() {
    return (
        <div id="plan">
            <PlannedList level="beginner" url={beginnerUrl} />
            <PlannedList level="intermediate" url={beginnerUrl}/>
            <PlannedList level="expert" url={beginnerUrl}/>
        </div>
    );
}

export default PlanChoices;