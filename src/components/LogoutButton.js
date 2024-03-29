import { LoggedInContext } from "App";
import React, {useContext, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export function LogoutButton(){
    const [isLoggedIn,setIsLoggedIn] = useContext(LoggedInContext);
    const navigate = useNavigate();

    const logout = ()=>{
        setIsLoggedIn(false);
        sessionStorage.removeItem('yourPlan');
        alert("You are logged out.")
        navigate('/');
    }

    return (
        <Button variant="outline-secondary" onClick={logout} >Logout</Button>
    )
}