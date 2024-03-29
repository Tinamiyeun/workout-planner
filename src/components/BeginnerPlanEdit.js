import React, { useState, useContext } from 'react';
import { YourPlan } from './YourPlan';
import {LoggedInContext} from "../App";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import SuggestVip from 'components/SuggestVip'
import NotLoggedIn from 'helpers/NotLoggedIn';

function BeginnerPlanEdit () {
    const plan = JSON.parse(sessionStorage.getItem('yourPlan'));
    const [isLoggedIn,setIsLoggedIn] = useContext(LoggedInContext);

    const [yourPlan, setYourPlan] = useState(plan);

    return (
        <>
            {isLoggedIn ? 
            <Container>
                <Col>
                    <YourPlan yourPlan={yourPlan} setYourPlan={setYourPlan} />
                    <SuggestVip />
                </Col>
            </Container> 
            : 
                <NotLoggedIn />
            }
        </>
    )
    
}

export default BeginnerPlanEdit;