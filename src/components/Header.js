import Styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LoggedInContext } from "App";
import { VipContext } from "contexts/VipContext";
// import { ThemeButton } from "./ThemeButton";

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
    const [isVip, setIsVip] = useContext(VipContext);

    if(isVip){
        return (
            <Wrapper>
            <h1>THE LIMIT</h1>
            <ul>
                <li className="me-5"><NavLink to="/">Home</NavLink></li>
                <li className="me-5"><NavLink to="/about">About Us</NavLink></li>
                <li className="me-5"><NavLink to="/customizeplan">Create Your Own Plan</NavLink></li>
                <li className="me-5"><NavLink to="/">Plans</NavLink></li>
                <li className="me-5"><NavLink to="/postworkout">POST</NavLink></li>
                {/* <ThemeButton/> */}
            </ul>
        </Wrapper>
        )
    }
    else if(!isVip && isLoggedIn){
        return ( 
        <Wrapper>
            <h1>THE LIMIT</h1>
            <ul>
                <li className="me-5"><NavLink to="/">Home</NavLink></li>
                <li className="me-5"><NavLink to="/about">About Us</NavLink></li>
                <li className="me-5"><NavLink to="/">Plans</NavLink></li>
                {/* <ThemeButton/> */}
            </ul>
        </Wrapper>)
    }
    else if(!isLoggedIn){
        return (
            <Wrapper>
                <h1>THE LIMIT</h1>
                <ul>
                    <li className="me-5"><NavLink to="/">Home</NavLink></li>
                    <li className="me-5"><NavLink to="/about">About Us</NavLink></li>
                    <li className="me-5"><NavLink to="/login">Login</NavLink></li>
                    <li className="me-5"><NavLink to="/register">Register</NavLink></li>
                    {/* <ThemeButton/> */}
                </ul>
            </Wrapper>
        )
    }
    
}

export default Header;

const Wrapper = Styled.div`
display: flex;
flex-direction: row;
background-color: #F2B705;
margin-bottom: 10px;
color: #59445F;
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

