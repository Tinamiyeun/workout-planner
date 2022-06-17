import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import Styled from "styled-components";

function HomePage() {

    return (
        <Wrapper>
            <img src={img1} alt="placeholder" />                
            <SignUp>
                <h1>
                    Sign up for more features
                </h1>
            </SignUp>
            <Box>
                <Box1><h2>Follow the plan</h2></Box1>
                <Box1><h2>Create your own plan</h2></Box1>
                <Box1><h2>And MORE!</h2></Box1>               
            </Box>
            <Section1>
                <img src={img2} alt="placeholder" />
                <div className="description">
                    <h2>Sculpt</h2>
                    <p>Helping you sculpt long, lean, beautiful muscles throughout your entire body using precise, controlled, low-impact movements.</p>
                </div>
            </Section1>
            <Section2>
                <img src={img3} alt="placeholder" />
                <div className="description">
                    <h2>Strength</h2>
                    <p>Using your own bodyweight, learn how to strengthen your mind-body connection allowing you to create your OWN resistance!</p>
                </div>
            </Section2>
            
        </Wrapper>
    )
}

export default HomePage;

const Wrapper = Styled.div`
text-align: center;
justify-content: center;
align-items: center;
color: #59443F;
img{
    width: 100%; 
    background-size: cover;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    object-fit: cover;
    height: 500px;
}
`;

const SignUp = Styled.div`
position: absolute;
top: 350px;
left: 50%;
color: #F2F2F0;
`;

const Box = Styled.div`
display: flex;
direction: row;
justify-content: space-evenly;
align-items: center;
height: 200px;
h2{
    width: 250px;
    background-color: #BFB8AE;
    padding: 20px;
    justify-content: center;
    align-items: center
    vertical-align: middle;
}
`;

const Box1 = Styled.div`
background-color: #BFB8AE;
padding-top: 35px;
padding-bottom: 35px;
`;

const Section1 = Styled.div`
margin-bottom: 20px;
display: flex;
position: relative;
img{
    width: 85vw;
}
.description {
    background-color: #D9B504;
    padding: 20px;
    height: 250px;
    position: absolute;
    width: 250px;
    right:50px;
    top: 100px;
}
`;

const Section2 = Styled.div`
display: flex;
position: relative;
img{
    width: 85vw;
    margin-left: auto;
    display: block;
}
.description {
    background-color: #D9B504;
    padding: 20px;
    height: 250px;
    position: absolute;
    width: 250px;
    left:50px;
    top: 100px;
}
`;