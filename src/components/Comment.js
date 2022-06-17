import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Comment(){

    return (
        <Container>
            <Card className="text-center">
                <Card.Body>
                    <Card.Text>What do you think about today's workout?</Card.Text>
                    <Row className="justify-content-md-center">
                        <Col><Button>Too Easy</Button></Col>
                        <Col><Button>Great</Button></Col>
                        <Col><Button>Too Hard</Button></Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>

    )
}

export default Comment;