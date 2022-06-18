import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function Congrats() {

    return (
        <Container>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Well Done!</Card.Title>
                    <Card.Text>A step closer to your goal!</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Congrats;