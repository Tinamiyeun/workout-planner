import { ExerciseByBodyPart } from 'components/ExerciseByBodyPart';
import { YourPlan } from 'components/YourPlan';
import React, { useState } from 'react';
import {HistoryReuse, UsePlan} from '../components/HistoryReuse';

export function ReusePlan(){

    const tempPlan = JSON.parse(sessionStorage.getItem('yourPlan'));

    const [yourPlan, setYourPlan] = useState(tempPlan);
    
    return <>
    <YourPlan yourPlan={yourPlan} setYourPlan={setYourPlan}  />
    </>
}