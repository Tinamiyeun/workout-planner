import React, { useContext } from 'react';
import { BodyPart } from '../components/BodyPart';
import {LoggedInContext} from "../App";
import { Navigate } from 'react-router-dom';

export function CustomizePlan(){
    const [isLoggedIn,setIsLoggedIn] = useContext(LoggedInContext);
    return  (
        <>
            {isLoggedIn ? <BodyPart /> : <Navigate to='/login' />}
        </>
    );
}