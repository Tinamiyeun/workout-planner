import Card from 'react-bootstrap/Card';

function Congrats() {

    return (
        <>
            <Card style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title>Well Done!</Card.Title>
                    <Card.Text>A step closer to your goal!</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Congrats;