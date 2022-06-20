import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import {LoggedInContext} from "../App";
import { VipContext } from 'contexts/VipContext';
import {useNavigate} from 'react-router-dom';
import { Card } from 'react-bootstrap';

function SuggestVip() {
    const [isLoggedIn,setIsLoggedIn] = useContext(LoggedInContext);
    const [isVip, setIsVip] = useContext(VipContext);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/upgrade');
    }
    if (isLoggedIn && !isVip) {
        return (
                <Card border="warning" style={{marginTop: '20px'}}>
                    <Card.Body>
                        <Card.Title className="text-center"><h2>Upgrade your membership</h2></Card.Title>
                        <Card.Text className="text-center" style={{fontSize:'20px'}}>
                            Want to customize your own workout plan?
                        </Card.Text>
                        <Button variant="warning" onClick={handleClick}>Become a VIP</Button>
                    </Card.Body>
                </Card>
                );      
    
    }
}

export default SuggestVip;