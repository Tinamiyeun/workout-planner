import React, {useState, useContext} from 'react';
import Congrats from '../components/Congrats';
import Comment from '../components/Comment';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Save from '../components/Save';
import Container from 'react-bootstrap/Container';
import {LoggedInContext} from "../App";
import { Navigate } from 'react-router-dom';


function PostWorkout(){

    const [comment, setComment] = useState('');
    const [isLoggedIn,setIsLoggedIn] = useContext(LoggedInContext);
    
    return <>
    {isLoggedIn ? <> 
    <Congrats />
    <br/>
    <Comment setComment={setComment}/>
    <br/>
    <Container>
        <Row>
            <Col><Save comment={comment} /></Col>
        </Row>
    </Container>
    <br/>
    </> 
    : 
    <Navigate to='/login' />}
    </>
}

export default PostWorkout;