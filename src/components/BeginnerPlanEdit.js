import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { PlanList } from './PlanList';
import { YourPlan } from './YourPlan';
import {LoggedInContext} from "../App";
import { Navigate } from 'react-router-dom';

function BeginnerPlanEdit () {
    const plan = sessionStorage.getItem('yourPlan');
    const [isLoggedIn,setIsLoggedIn] = useContext(LoggedInContext);

    //const [yourPlan, setYourPlan] = useState(plan);
    useEffect(() => {
        //console.log(yourPlan);
        console.log(plan);
        
    }, [])
    return (
        <>
        {isLoggedIn ? <YourPlan yourPlan={JSON.parse(plan)} setYourPlan={JSON.parse(plan)} /> : <Navigate to='/login' />}
        
        </>
    )
    
}

export default BeginnerPlanEdit;