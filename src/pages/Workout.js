import React, { useContext } from 'react';
import { PlanList } from 'components/PlanList';
import {LoggedInContext} from "../App";
import { Navigate } from 'react-router-dom';

export function Workout() {
    const [isLoggedIn,setIsLoggedIn] = useContext(LoggedInContext);
    return <>
    {isLoggedIn ? <PlanList /> : <Navigate to='/login' />}
    
    </>
}