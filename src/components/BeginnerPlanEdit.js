import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { YourPlan } from './YourPlan';

function BeginnerPlanEdit () {
    const plan = window.localStorage.getItem('YourPlan');

    const [yourPlan, setYourPlan] = useState(JSON.parse(window.localStorage.getItem('YourPlan')));
    useEffect(() => {
        console.log(yourPlan);
        console.log(JSON.parse(window.sessionStorage.getItem('YourPlan')));
        console.log(plan);
        console.log(JSON.parse(plan));
        
    })
    return (
        <YourPlan yourPlan={yourPlan} setYourPlan={setYourPlan} />
    )
    
}

export default BeginnerPlanEdit;