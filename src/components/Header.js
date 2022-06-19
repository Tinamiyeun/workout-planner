import Styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LoggedInContext } from "App";
import { VipContext } from "contexts/VipContext";
import { LogoutButton } from "./LogoutButton";
import '../css/bodyPart.css'
import { UserNameContext } from "../contexts/UserNameContext";

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
    const [isVip, setIsVip] = useContext(VipContext);
    const [username, setUsername] = useContext(UserNameContext);
    return (
        <Wrapper>
            <NavLink to='/' className="navlink-header"><h1>THE LIMIT</h1></NavLink>
            <ul>
                {isLoggedIn? <li className="me-5 li-header">welcome,{username}</li>:''}

                 <li className="me-5 li-header"><NavLink to="/" className="navlink-header">Home</NavLink></li>
                 <li className="me-5 li-header"><NavLink to="/about" className="navlink-header">About Us</NavLink></li>
                 {isLoggedIn?
                  isVip?
                        <>
                        <li className="me-5 li-header"><NavLink className="navlink-header" to="/customizeplan">Create Your Own Plan</NavLink></li>
                        <li className="me-5 li-header"><NavLink className="navlink-header" to="/">Plans</NavLink></li>
                        <li className="me-5 li-header"><NavLink className="navlink-header" to="postworkout">postworkout</NavLink></li>
                        <li className="me-5 li-header"><NavLink className="navlink-header" to="history">history</NavLink></li>
                        <li className="me-5 li-header"><LogoutButton /></li></>
                        :
                        <>
                        <li className="me-5 li-header"><NavLink className="navlink-header" to="/upgrade">Create Your Own Plan</NavLink></li>
                        <li className="me-5 li-header"><NavLink className="navlink-header" to="/">Plans</NavLink></li>
                        <li className="me-5 li-header"><NavLink className="navlink-header" to="/upgrade">Upgrade To VIP</NavLink></li>

                        <li className="me-5 li-header"><LogoutButton /></li></>
                    : 
                    <>
                    <li className="me-5 li-header"><NavLink className="navlink-header" to="/login">Login</NavLink></li>
                    <li className="me-5 li-header"><NavLink className="navlink-header" to="/register">Register</NavLink></li></>
                    }
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

