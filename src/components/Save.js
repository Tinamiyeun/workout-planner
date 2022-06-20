import Button from 'react-bootstrap/Button';
import React, {useState, useContext} from 'react';
import { UserNameContext } from 'contexts/UserNameContext';
import {useNavigate} from 'react-router-dom';
import { VipContext } from "contexts/VipContext";

function Save(props) {
    
    const [userName, setUserName] = useContext(UserNameContext);
    const [isVip, setIsVip] = useContext(VipContext);
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log({userName})       
        })    
    
    const yourPlan = JSON.parse(window.sessionStorage.getItem('yourPlan'));
    const comment = props.comment;
   
    const handleOnClick = (event) => {
        fetch("http://localhost:3001/history", {
        method: "POST",
        body: JSON.stringify({//pass the value of input field here
          username: userName,
          comment: comment,
          date: new Date(),
          exercise_records: yourPlan,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((data) => data.json())
        .then(isVip ? (navigate("/history")) : (navigate("/upgrade")));

    }
    

    return (
        <div className="container col-6">
        <Button className="col-5 me-5" variant="warning">Upload Photo</Button>
        <Button variant="warning" className="col-5" onClick={handleOnClick}>Save</Button>
        </div>
        
    )
}

export default Save;