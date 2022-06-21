import React, {useState} from 'react';
import Congrats from '../components/Congrats';
import Comment from '../components/Comment';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Save from '../components/Save';
import Container from 'react-bootstrap/Container';


function PostWorkout(){

    const [comment, setComment] = useState('');
    //add the photo state to send it to Save component(selectedFile)
    const [selectedFile, setSelectedFile] = useState('');

    return <>
    <Congrats />
    <br/>
    <Comment setComment={setComment}/>
    <br/>
    <Container className="mt-3">
        <Row>
            <Col><Save comment={comment}
            
            /></Col>
            
        </Row>
    </Container>
    
    <br/>
    </>
}

export default PostWorkout;