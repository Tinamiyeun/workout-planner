import Styled from "styled-components";
import { NavLink } from "react-router-dom";

function Header() {

    return (
        <Wrapper>
            <h1>THE LIMIT</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
            </ul>
        </Wrapper>
    )
}

export default Header;

const Wrapper = Styled.div`
display: flex;
flex-direction: row;
background-color: #F2B705;

margin-bottom: 10px;
color: #59443F;
justify-content: space-between;
ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
}
li {
    margin-right: 10px;
}
a {
    text-decoration: none;
}
`;

