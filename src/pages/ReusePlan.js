import { ExerciseByBodyPart } from 'components/ExerciseByBodyPart';
import { YourPlan } from 'components/YourPlan';
import React, { useState } from 'react';
import {HistoryReuse, UsePlan} from '../components/HistoryReuse';

export function ReusePlan(){
    //For the gated access: const [isLoggedIn,setIsLoggedIn] = useContext(LoggedInContext);
    const tempPlan = JSON.parse(sessionStorage.getItem('yourPlan'));

    const [yourPlan, setYourPlan] = useState(tempPlan);
    //might want to define what you send to your plan differently: directly with tempPlan
    return <>
    <YourPlan yourPlan={yourPlan} setYourPlan={setYourPlan}  />
    </>
}