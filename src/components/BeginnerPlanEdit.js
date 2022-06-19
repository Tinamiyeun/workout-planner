import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { YourPlan } from './YourPlan';

function BeginnerPlanEdit () {
    const plan = localStorage.getItem('yourPlan');

    //const [yourPlan, setYourPlan] = useState(JSON.parse(window.localStorage.getItem('YourPlan')));
    useEffect(() => {
        //console.log(yourPlan);
        //console.log(JSON.parse(window.sessionStorage.getItem('YourPlan')));
        console.log(plan);
        //console.log(JSON.parse(plan));
        
    }, [])
    return (
        <YourPlan yourPlan={JSON.parse(plan)} setYourPlan={JSON.parse(plan)} />
    )
    
}

export default BeginnerPlanEdit;