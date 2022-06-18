import { LoggedInContext } from '../App';
import React, { useRef, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import { VipContext } from 'contexts/VipContext';
import { Form } from 'react-bootstrap';

export function RegisterForm(){

    const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
    const [isVip, setIsVip] = useContext(VipContext);

    const usernameRef = useRef();
    const passwordRef = useRef();
    const vipRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = (event) => {

        event.preventDefault();

        fetch("http://localhost:3001/users/register", {
            method: "POST",
            body: JSON.stringify({
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            vip: vipRef.current.checked
            }),
            headers: {
            "Content-type": "application/json; charset=UTF-8",
            }, 
            })
            .then((data) => data.json())
            .then((json) => 
                            {alert(json.msg);
                            if (json.success) {
                                setIsLoggedIn(true);
                                vipRef.current.checked ? setIsVip(true) : setIsVip(false);
                                vipRef.current.checked ? navigate("/customizeplan") : navigate("/");
                            }  else{
                                setIsLoggedIn(false);
                                navigate("/register");
                            }
                                        
            // json.success ? navigate("/customizeplan") : navigate("/")
            })
    }

    return (
        <div  className="container col-4">
        <h3>Register</h3>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mt-3">
                <Form.Label htmlFor={usernameRef}>Username</Form.Label>
                <Form.Control id="usernameReg" type="text" ref={usernameRef} required />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control id="passwordReg" type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Check ref={vipRef} ></Form.Check>
                <Form.Label>Want to become a VIP?</Form.Label>
            </Form.Group>
            <Button type="submit" variant="warning" className="mt-3 mb-3">Register</Button>
        </Form>
        </div>
    )
}