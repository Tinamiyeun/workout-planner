import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {useContext, useState, useEffect, useRef} from 'react';
import { UserNameContext } from 'contexts/UserNameContext';
import Confetti from 'react-confetti/dist/types/Confetti';

function Congrats() {

    const [userName, setUserName] = useContext(UserNameContext);

    const[height, setHeight] = useState();
    const[width, setWidth] = useState();
    const confettiRef = useRef();

    useEffect(() =>{
        setHeight(confettiRef.current.clientHeight);
        setWidth(confettiRef.current.clientWidth);
    }, [])

    return (
        <Container>
            <Card className="text-center" ref={confettiRef}>
                <Card.Body>
                    <Card.Title><h2>{userName}, Well Done!</h2></Card.Title>
                    <Card.Text>A step closer to your goal!</Card.Text>
                </Card.Body>
            </Card>
            <Confetti
                numberOfPieces={80}
                width={width}
                height={height} />
        </Container>
    )
}

export default Congrats;