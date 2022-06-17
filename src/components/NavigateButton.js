import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function NavigateButton(props) {
    let redirect = props.redirect;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/'+redirect);
    };
    return (
        <Button onClick={handleNavigate}>{props.message}</Button>
    );
}

export default NavigateButton;