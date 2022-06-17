import React from 'react';
import Congrats from '../components/Congrats';
import Comment from '../components/Comment';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Upload from '../components/Upload';
import Save from '../components/Save';

function PostWorkout(){
    return <>
    <Congrats />
    <br/>
    <Comment />
    <br/>
    <Row>
        <Col><Upload /></Col>
        <Col><Save /></Col>
    </Row>
    <br/>
    </>
}

export default PostWorkout;