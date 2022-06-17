import React, { useRef, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import {LoggedInContext} from "../App";
import {useNavigate} from 'react-router-dom';
import { VipContext } from 'contexts/VipContext';

export function LoginForm(){

    const {isLoggedIn,setIsLoggedIn} = useContext(LoggedInContext);
    const {isVip, setIsVip} = useContext(VipContext);
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
                console.log(json);
                if (json.success){
                    setIsLoggedIn(true);
                    alert("Logged in!");
                    if (json.user.vip){
                        setIsVip(true);
                        navigate("/customizeplan")
                    }else{
                        setIsVip(false);
                        navigate("/")
                    }
                }else{
                    setIsLoggedIn(false);
                    alert("Unable to login! please try again. ")
                    navigate("/login")
                }
              })        
            }

    return (
        <div className="border border-secondary">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="mt-3">
                    <label htmlFor={usernameRef}>Username</label>
                    <input id="username" type="text" ref={usernameRef} required />
                </div>
                <div className="mt-3">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" ref={passwordRef} required />
                </div>
                <Button type="submit" variant="warning" className="mt-3 mb-3">Login</Button>
            </form>
        </div>
    )
}