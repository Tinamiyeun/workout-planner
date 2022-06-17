import { LoggedInContext } from '../App';
import React, { useRef, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import { VipContext } from 'contexts/VipContext';

export function RegisterForm(){

    const {isLoggedIn, setIsLoggedIn} = useContext(LoggedInContext);
    const {isVip, setIsVip} = useContext(VipContext);

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
                            json.success ? setIsLoggedIn(true) :    
                                        setIsLoggedIn(false);
            // json.success ? navigate("/customizeplan") : navigate("/")
            })
            .then(()=>{
                vipRef.current.checked ? setIsVip(true) : setIsVip(false)
                vipRef.current.checked ? navigate("/customizeplan") : navigate("/");
            })
    }

    return (
        <div className="border border-secondary mt-3">
        <h3>Register</h3>
        <form onSubmit={handleSubmit}>
            <div className="mt-3">
                <label htmlFor={usernameRef}>Username</label>
                <input id="usernameReg" type="text" ref={usernameRef} required />
            </div>
            <div className="mt-3">
                <label htmlFor="password">Password</label>
                <input id="passwordReg" type="password" ref={passwordRef} required />
            </div>
            <div className="mt-3">
                <label htmlFor="vip">Want to become a VIP?</label>
                <input id="vipReg" type="checkbox" ref={vipRef} ></input>
            </div>
            <div className="mt-3 mb-3"><Button type="submit" variant="warning">Register</Button></div>
        </form>
        </div>
    )
}