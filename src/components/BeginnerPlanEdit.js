import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { PlanList } from './PlanList';
import { YourPlan } from './YourPlan';
import {LoggedInContext} from "../App";
import { Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import SuggestVip from 'components/SuggestVip'

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
            {isLoggedIn ? 
            <Container>
                <Col>
                    <YourPlan yourPlan={JSON.parse(plan)} setYourPlan={JSON.parse(plan)} />
                    <SuggestVip />
                </Col>
            </Container> 
            : 
                <Navigate to='/login' />
            }
        </>
    )
    
}

export default BeginnerPlanEdit;