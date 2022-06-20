import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function Comment(props){

    const setComment = props.setComment;

    const tooEasy = () =>{
        setComment('too easy');
    };

    const great =() => {
        setComment('great');
    }

    const tooHard =() => {
        setComment('too hard');
    }

    return (
        <Container className="mb-3">
            <Card className="text-center">
                <Card.Body>
                    <Card.Text><h4>What do you think about today's workout?</h4></Card.Text>
                    <Row className="justify-content-md-center mt-4 mb-2">
                        <Col><Button variant="outline-warning" onClick={tooEasy}>Too Easy</Button></Col>
                        <Col><Button variant="outline-warning" onClick={great}>Great</Button></Col>
                        <Col><Button variant="outline-warning" onClick={tooHard}>Too Hard</Button></Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
        
    )
}

export default Comment;