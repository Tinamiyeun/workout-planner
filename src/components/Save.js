import Button from 'react-bootstrap/Button';
import React, {useState, useContext} from 'react';
import { UserNameContext } from 'contexts/UserNameContext';

function Save(props) {
    
    const [userName, setUserName] = useContext(UserNameContext);

    React.useEffect(() => {

        console.log(userName)
        
        })
    
    
    const yourPlan = window.sessionStorage.getItem('yourPlan');
    const comment = props.comment;
   
    const handleOnClick = (event) => {
        fetch("http://localhost:3001/history", {
        method: "POST",
        body: JSON.stringify({//pass the value of input field here
          username: userName,
          comment: comment,
          date: new Date().toLocaleTimeString(),
          exercise_records: yourPlan,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((data) => data.json())
        .then((json) => {
            
        });
    }
    

    return (
        <>
        <Button>Upload photo</Button>
        <Button onClick={handleOnClick}>Save</Button>
        </>
        
    )
}

export default Save;