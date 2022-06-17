import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Comment(){

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col><Button>Too Easy</Button></Col>
                <Col><Button>Great</Button></Col>
                <Col><Button>Too Hard</Button></Col>
            </Row>
        </Container>

    )
}

export default Comment;