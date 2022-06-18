import { Button, Form } from 'react-bootstrap';
import React, { useContext, useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import { UserNameContext } from 'contexts/UserNameContext';

export function BecomeVip(){


    const [username, setUserName] = useContext(UserNameContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:3001/users/upgrade", {
            method: "PUT",
            body: JSON.stringify({
            username: username,
            }),
            headers: {
            "Content-type": "application/json; charset=UTF-8",
            }, 
            })
            .then((data) => data.json())
            .then((json)=> {
                json.success? alert("Congratulations! You are a VIP now!"): alert("unsuccessful!");
                json.success? navigate('/customizeplan'): navigate('/');
            })

    }

    return (
        <div className="container col-4">
            <Button onClick={handleSubmit} variant="warning">Click here to become a VIP</Button>
        </div>
    )
}