import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { YourPlan } from './YourPlan';

function BeginnerPlanEdit () {
    const plan = sessionStorage.getItem('yourPlan');

    const [yourPlan, setYourPlan] = useState(plan);
    useEffect(() => {
        console.log(yourPlan);
        console.log(plan);
        
    }, [])
    return (
        <YourPlan yourPlan={JSON.parse(plan)} setYourPlan={JSON.parse(plan)} />
    )
    
}

export default BeginnerPlanEdit;