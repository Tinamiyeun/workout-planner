import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {useContext} from 'react';
import { UserNameContext } from 'contexts/UserNameContext';

function Congrats() {

    const [userName, setUserName] = useContext(UserNameContext);
    return (
        <Container>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title><h2>{userName}, Well Done!</h2></Card.Title>
                    <Card.Text>A step closer to your goal!</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Congrats;