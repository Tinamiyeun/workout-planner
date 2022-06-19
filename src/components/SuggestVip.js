import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import {LoggedInContext} from "../App";
import { VipContext } from 'contexts/VipContext';
import {useNavigate} from 'react-router-dom';

function SuggestVip() {
    const [isLoggedIn,setIsLoggedIn] = useContext(LoggedInContext);
    const [isVip, setIsVip] = useContext(VipContext);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/upgrade');
    }
    if (isLoggedIn && !isVip) {
        return (
            <div>
                <p>Want to customize your own workout plan?</p>
                <Button onClick={handleClick}>Become a VIP</Button>
            </div> 
        );      
    
    }
}

export default SuggestVip