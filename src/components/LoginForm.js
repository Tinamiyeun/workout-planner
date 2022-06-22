import React, { useRef, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import {LoggedInContext} from "../App";
import {NavLink, useNavigate} from 'react-router-dom';
import { VipContext } from 'contexts/VipContext';
import { Form } from 'react-bootstrap';
import {UserNameContext} from '../contexts/UserNameContext';

export function LoginForm(){

    const [isLoggedIn,setIsLoggedIn] = useContext(LoggedInContext);
    const [isVip, setIsVip] = useContext(VipContext);
    const [userName, setUserName] = useContext(UserNameContext);

    const usernameRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = (event) => {

        event.preventDefault();

        fetch("http://localhost:3001/users/login", {
            method: "POST",
            body: JSON.stringify({
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            }),
            headers: {
            "Content-type": "application/json; charset=UTF-8",
            }, 
            })
            .then((data) => data.json())
            .then((json) => {
                // console.log(json);
                if (json.success){
                    // console.log(json.user.username);
                    setUserName(json.user.username);
                    // console.log(json.user.vip);
                    setIsLoggedIn(true);
                    alert("Logged in!" + json.user.username);
                    // console.log(userName);
                    if (json.user.vip){
                        setIsVip(true);
                        navigate("/customizeplan")
                    }else{
                        setIsVip(false);
                        navigate("/loggedin")
                    }
                }else{
                    setIsLoggedIn(false);
                    alert("Unable to login! please try again. ")
                    navigate("/login")
                }
              })}
            //   React.useEffect(() => {

            //     console.log(userName)
                
            //     })

    return (
        <div className="container col-4">
            <h3>Login</h3>
            <p>Doesn't have an account? <NavLink to="/register">Click here to register.</NavLink></p>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Label >Username</Form.Label>
                    <Form.Control type="text" ref={usernameRef} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label >Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button type="submit" variant="warning" className="mt-3 mb-3">Login</Button>
            </Form>
        </div>
    )
}
