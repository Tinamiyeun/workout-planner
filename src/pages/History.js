import React, {useState, useContext} from 'react';
import { UserNameContext } from 'contexts/UserNameContext';
import DisplayHistory from 'components/DisplayHistory';
import Container from 'react-bootstrap/Container';
import {LoggedInContext} from "../App";
import { Navigate } from 'react-router-dom';

function History() {

    const [userName, setUserName] = useContext(UserNameContext);
    const [isLoggedIn,setIsLoggedIn] = useContext(LoggedInContext);

    // React.useEffect(() => {
    //     console.log({userName})       
    //     })    

    return ( 
    <>
        {isLoggedIn ? 
            <Container>
                <div className="text-center">
                <h1 >{userName}'s workout history</h1>
                </div>
                <DisplayHistory />
            </Container>
            : 
            <Navigate to='/login' />
        }
    </>
    )
}

export default History;