import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import '../css/about.css';

function AboutUs() {

    return (
        <Container>
            <Col sm={12}>            
            <h1>Limitless</h1>
            <hr/>
            <Col sm={9} className="description">
            <p>There is no limit to what you are capable of, physically and mentally. The Limit is about perseverance. The goal is to push yourself past your individual limit.
                We believe that each person requires unique training for their personal abilities. Our trainers are all certified and able to adapt to your needs, whether you are dealing with an injury or health issue, are pregnant or postpartum or you're just looking for the ultimate challenge. There's always a way to train hard and get results.
                Our videos provide a variety of workouts with movements that are simple, effective and safe, no matter your level. We prioritize proper form and biomechanics with clear instructions. Our goal is to make you feel strong and confident in yourself, no matter your level.
                We are excited to help you find your limit and push yourself past it. Now let's do it!</p>
            </Col>
            
            <h1>Our Team</h1>
            <hr/>
            </Col>
            <Row>
                <Col md={8}>
                    <Image src={require('../img/img5.jpg')} alt="placeholder" className="img-fluid" /> 
                </Col>
                <Col md={4} className='description'>
                    <h2>Trainer A</h2>
                    <p>"Train in a way that makes you feel unstoppable!"
                        Kayla is a NASM CPT and professional dancer that has performed all around the world.  While battling extreme fatigue and burnout while on tour, she made a commitment to becoming the healthiest, strongest version of herself.  
                        Kayla believes that health is beautifully individual, and that the joy of movement should fuel your fitness.  She loves to challenge clients to push their bodies and minds to discover what they are capable of.  
                        "You are limitless. Let's get to work!"</p>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col sm={8} className='image'>
                    <Image src={require('../img/img6.jpg')} alt="placeholder" className="img-fluid" /> 
                </Col>
                <Col sm={4} className='description'>
                    <h2>Trainer B</h2>
                    <p>"Train in a way that makes you feel unstoppable!"
                        Kayla is a NASM CPT and professional dancer that has performed all around the world.  While battling extreme fatigue and burnout while on tour, she made a commitment to becoming the healthiest, strongest version of herself.  
                        Kayla believes that health is beautifully individual, and that the joy of movement should fuel your fitness.  She loves to challenge clients to push their bodies and minds to discover what they are capable of.  
                        "You are limitless. Let's get to work!"</p>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUs;