import img1 from "../img/img1.jpg";
import Styled from "styled-components";

function HomePage() {

    return (
        <Wrapper>
            <img src={img1} alt="placeholder" />
            <SignUp>
                <h2>
                    Sign up for more features
                </h2>
            </SignUp>
            
        </Wrapper>
    )
}

export default HomePage;

const Wrapper = Styled.div`
text-align: center;
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

`;