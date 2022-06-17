import React from 'react';
import Congrats from '../components/Congrats';
import Comment from '../components/Comment';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Upload from '../components/Upload';
import Save from '../components/Save';
import Container from 'react-bootstrap/Container';


function PostWorkout(){
    return <>
    <Congrats />
    <br/>
    <Comment />
    <br/>
    <Container>
        <Row>
            <Col><Upload /></Col>
            <Col><Save /></Col>
        </Row>
    </Container>
    
    <br/>
    </>
}

export default PostWorkout;