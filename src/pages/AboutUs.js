import Styled from "styled-components";
import img5 from "../img/img5.jpg";
//import img6 from "../img/img6.jpg";

function AboutUs() {

    return (
        <Wrapper>            
            <h1>Limitless</h1>
            <hr/>
            <p>There is no limit to what you are capable of, physically and mentally. The Limit is about perseverance. The goal is to push yourself past your individual limit.
                We believe that each person requires unique training for their personal abilities. Our trainers are all certified and able to adapt to your needs, whether you are dealing with an injury or health issue, are pregnant or postpartum or you're just looking for the ultimate challenge. There's always a way to train hard and get results.
                Our videos provide a variety of workouts with movements that are simple, effective and safe, no matter your level. We prioritize proper form and biomechanics with clear instructions. Our goal is to make you feel strong and confident in yourself, no matter your level.
                We are excited to help you find your limit and push yourself past it. Now let's do it!</p>
            <h1>Our Team</h1>
            <hr/>
            <Group>
                <img src={img5} alt="placeholder" /> 
                <div className="description">
                    <h2>Trainer A</h2>
                    <p>"Train in a way that makes you feel unstoppable!"
                        Kayla is a NASM CPT and professional dancer that has performed all around the world.  While battling extreme fatigue and burnout while on tour, she made a commitment to becoming the healthiest, strongest version of herself.  
                        Kayla believes that health is beautifully individual, and that the joy of movement should fuel your fitness.  She loves to challenge clients to push their bodies and minds to discover what they are capable of.  
                        "You are limitless. Let's get to work!"</p>
                </div>
            </Group>
        </Wrapper>
    )
}

export default AboutUs;

const Wrapper = Styled.div`
h1 {
    padding: 5px;
}
`;

const Group = Styled.div`
justify-content: center;
align-items: center;
align-content: center;
display: flex;
flex-direction: row;
img {
    height: 400px;
}
.description {
    padding: 30px;
    width: 400px;
    background-color: #BFB8AE;
    height: 340px;
}

`;