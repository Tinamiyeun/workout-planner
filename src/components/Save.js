import Button from 'react-bootstrap/Button';
import {useState} from 'react';

function Save() {
    
    const [savedPlan, setSavedPlan] = useState('');
    const yourPlan = window.sessionStorage.getItem('yourPlan');
    console.log(yourPlan);

    // setSavedPlan(yourPlan);

    const handleOnClick = (event) => {
        fetch("http://localhost:3001/history", {
        method: "POST",
        body: JSON.stringify({//pass the value of input field here
          
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
        <Button onClick={handleOnClick}>Save</Button>
    )
}

export default Save;