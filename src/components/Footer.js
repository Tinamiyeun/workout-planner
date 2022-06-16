import Styled from "styled-components";

function Footer() {

    return (
        <Wrapper>
            <p>copyRight</p>
        </Wrapper>
    )
}

export default Footer;

const Wrapper = Styled.div`
display: flex;
flex-direction: row;
background-color: #F2B705;
margin-top: 10px;
color: #59443F;
`;